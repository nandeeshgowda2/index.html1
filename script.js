const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

// ================= GENERAL =================

function scrollToSection(id) {

```
document.getElementById(id).scrollIntoView({
    behavior: "smooth"
});
```

}

// ================= LOGIN =================

function showLogin() {

```
modalBody.innerHTML = `

    <h2>Login to SkillBridge AI</h2>

    <p style="color:#667085;margin-bottom:20px;">
        Select your role to continue.
    </p>

    <label>Name</label>

    <input
        type="text"
        id="loginName"
        placeholder="Enter your name"
    >

    <label>Role</label>

    <select id="loginRole">

        <option value="student">
            Student
        </option>

        <option value="industry">
            Industry
        </option>

        <option value="faculty">
            Faculty
        </option>

    </select>

    <button onclick="loginUser()">
        Login
    </button>

`;

modal.style.display = "flex";
```

}

function loginUser() {

```
const name =
    document.getElementById("loginName").value;

const role =
    document.getElementById("loginRole").value;

if (name.trim() === "") {

    alert("Please enter your name.");

    return;

}

localStorage.setItem("userName", name);
localStorage.setItem("userRole", role);

modalBody.innerHTML = `

    <h2>Welcome, ${name}! 🎉</h2>

    <p style="margin:15px 0;">
        You have successfully logged in as
        <strong>${role}</strong>.
    </p>

    <button onclick="closeModal()">
        Continue to Dashboard
    </button>

`;
```

}

// ================= ASSESSMENT =================

function startAssessment() {

```
modalBody.innerHTML = `

    <h2>🧠 Skill Assessment</h2>

    <p style="color:#667085;">
        Answer these questions to generate your
        initial skill profile.
    </p>

    <br>

    <label>How comfortable are you with programming?</label>

    <select id="programming">

        <option value="30">Beginner</option>
        <option value="60">Intermediate</option>
        <option value="90">Advanced</option>

    </select>


    <label>How comfortable are you with databases?</label>

    <select id="database">

        <option value="30">Beginner</option>
        <option value="60">Intermediate</option>
        <option value="90">Advanced</option>

    </select>


    <label>How good is your problem solving?</label>

    <select id="problem">

        <option value="30">Beginner</option>
        <option value="60">Intermediate</option>
        <option value="90">Advanced</option>

    </select>


    <label>How good is your communication?</label>

    <select id="communication">

        <option value="30">Beginner</option>
        <option value="60">Intermediate</option>
        <option value="90">Advanced</option>

    </select>

    <button onclick="calculateSkills()">
        Analyze My Skills
    </button>

`;

modal.style.display = "flex";
```

}

function calculateSkills() {

```
const programming =
    Number(document.getElementById("programming").value);

const database =
    Number(document.getElementById("database").value);

const problem =
    Number(document.getElementById("problem").value);

const communication =
    Number(document.getElementById("communication").value);


const score =
    Math.round(
        (programming +
         database +
         problem +
         communication) / 4
    );


localStorage.setItem("skillScore", score);


let level;

if (score >= 80) {

    level = "Advanced";

} else if (score >= 60) {

    level = "Intermediate";

} else {

    level = "Beginner";

}


let recommendation;


if (database < 60) {

    recommendation =
        "Improve SQL and database management.";

} else if (problem < 60) {

    recommendation =
        "Practice Data Structures and Algorithms.";

} else if (programming < 60) {

    recommendation =
        "Strengthen your programming fundamentals.";

} else {

    recommendation =
        "You are ready for advanced industry projects.";

}


modalBody.innerHTML = `

    <h2>📊 Your Skill Analysis</h2>

    <div style="
        text-align:center;
        padding:20px;
        background:#eef2ff;
        border-radius:15px;
        margin:20px 0;
    ">

        <h1 style="color:#4f46e5;">
            ${score}%
        </h1>

        <p>Industry Readiness</p>

        <strong>${level}</strong>

    </div>

    <h3>AI Recommendation</h3>

    <p style="margin:10px 0 20px;">
        ${recommendation}
    </p>

    <button onclick="showLearning()">
        View Personalized Learning Path
    </button>

`;
```

}

// ================= LEARNING =================

function showLearning() {

```
modalBody.innerHTML = `

    <h2>📚 Personalized Learning Path</h2>

    <p>
        Based on your skill gaps, we recommend:
    </p>

    <div style="
        padding:15px;
        background:#f8fafc;
        border-radius:10px;
        margin-top:15px;
    ">

        <strong>01. SQL Fundamentals</strong>

        <p>
            Learn queries, joins, grouping and databases.
        </p>

    </div>

    <div style="
        padding:15px;
        background:#f8fafc;
        border-radius:10px;
        margin-top:10px;
    ">

        <strong>02. Data Structures</strong>

        <p>
            Learn arrays, stacks, queues and algorithms.
        </p>

    </div>

    <div style="
        padding:15px;
        background:#f8fafc;
        border-radius:10px;
        margin-top:10px;
    ">

        <strong>03. Industry Project</strong>

        <p>
            Build a real-world data analytics project.
        </p>

    </div>

    <br>

    <button onclick="closeModal()">
        Start Learning
    </button>

`;

modal.style.display = "flex";
```

}

// ================= APPLY =================

function apply(opportunity) {

```
const name =
    localStorage.getItem("userName");


if (!name) {

    alert(
        "Please login first before applying."
    );

    showLogin();

    return;

}


modalBody.innerHTML = `

    <h2>🎯 Application Submitted</h2>

    <p style="margin:20px 0;">

        Hi <strong>${name}</strong>,

        your application for

        <strong>${opportunity}</strong>

        has been submitted successfully.

    </p>

    <div style="
        background:#ecfdf3;
        padding:15px;
        border-radius:10px;
        color:#15803d;
    ">

        ✓ Application received

    </div>

    <br>

    <button onclick="closeModal()">
        Done
    </button>

`;

modal.style.display = "flex";
```

}

// ================= CLOSE MODAL =================

function closeModal() {

```
modal.style.display = "none";
```

}

window.onclick = function(event) {

```
if (event.target === modal) {

    closeModal();

}
```

};

// ================= WELCOME USER =================

window.addEventListener("load", function() {

```
const name =
    localStorage.getItem("userName");

if (name) {

    console.log(
        "Welcome back, " + name
    );

}
```

});
