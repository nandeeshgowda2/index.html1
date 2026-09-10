const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

// =====================================================
// 1. LOGIN
// =====================================================

function showLogin() {

```
modalBody.innerHTML = `

    <h2>🔐 Student Login</h2>

    <p class="modal-description">
        Login to access your SkillBridge AI dashboard.
    </p>

    <label>Full Name</label>

    <input
        type="text"
        id="studentName"
        placeholder="Enter your name"
    >

    <label>Email</label>

    <input
        type="email"
        id="studentEmail"
        placeholder="Enter your email"
    >

    <label>Student ID</label>

    <input
        type="text"
        id="studentID"
        placeholder="Enter your student ID"
    >

    <label>Role</label>

    <select id="studentRole">

        <option value="Student">
            Student
        </option>

        <option value="Faculty">
            Faculty
        </option>

        <option value="Industry">
            Industry
        </option>

    </select>

    <button onclick="loginStudent()">
        Login →
    </button>

`;

modal.style.display = "flex";
```

}

// =====================================================
// 2. LOGIN VALIDATION
// =====================================================

function loginStudent() {

```
const name =
    document.getElementById("studentName").value.trim();

const email =
    document.getElementById("studentEmail").value.trim();

const studentID =
    document.getElementById("studentID").value.trim();

const role =
    document.getElementById("studentRole").value;


// Check empty fields

if (name === "") {

    alert("Please enter your name.");

    return;
}

if (email === "") {

    alert("Please enter your email.");

    return;
}

if (studentID === "") {

    alert("Please enter your Student ID.");

    return;
}


// Save student information

const student = {

    name: name,

    email: email,

    studentID: studentID,

    role: role

};


localStorage.setItem(
    "studentData",
    JSON.stringify(student)
);


// Success message

modalBody.innerHTML = `

    <div class="success-box">

        <div class="success-icon">
            ✓
        </div>

        <h2>Login Successful!</h2>

        <p>
            Welcome <strong>${name}</strong> 👋
        </p>

        <p>
            Your SkillBridge AI profile is ready.
        </p>

        <button onclick="openAssessment()">
            Take Skill Assessment →
        </button>

    </div>

`;
```

}

// =====================================================
// 3. START SKILL ASSESSMENT
// =====================================================

function startAssessment() {

```
const student =
    localStorage.getItem("studentData");


// If student is not logged in

if (!student) {

    modalBody.innerHTML = `

        <h2>🔐 Login Required</h2>

        <p>
            Please login before taking the
            skill assessment.
        </p>

        <button onclick="showLogin()">
            Login Now →
        </button>

    `;

    modal.style.display = "flex";

    return;
}


openAssessment();
```

}

// =====================================================
// 4. OPEN ASSESSMENT
// =====================================================

function openAssessment() {

```
modalBody.innerHTML = `

    <h2>🧠 AI Skill Assessment</h2>

    <p class="modal-description">

        Answer the following questions.
        Your responses will be used to calculate
        your initial industry-readiness score.

    </p>


    <!-- QUESTION 1 -->

    <div class="question">

        <label>
            1. How comfortable are you with programming?
        </label>

        <select id="programming">

            <option value="20">
                Beginner
            </option>

            <option value="50">
                Basic
            </option>

            <option value="75">
                Intermediate
            </option>

            <option value="100">
                Advanced
            </option>

        </select>

    </div>


    <!-- QUESTION 2 -->

    <div class="question">

        <label>
            2. How good are you at problem solving?
        </label>

        <select id="problemSolving">

            <option value="20">
                Beginner
            </option>

            <option value="50">
                Basic
            </option>

            <option value="75">
                Intermediate
            </option>

            <option value="100">
                Advanced
            </option>

        </select>

    </div>


    <!-- QUESTION 3 -->

    <div class="question">

        <label>
            3. How comfortable are you with databases/SQL?
        </label>

        <select id="sql">

            <option value="20">
                I don't know SQL
            </option>

            <option value="50">
                Basic
            </option>

            <option value="75">
                Intermediate
            </option>

            <option value="100">
                Advanced
            </option>

        </select>

    </div>


    <!-- QUESTION 4 -->

    <div class="question">

        <label>
            4. How good are your communication skills?
        </label>

        <select id="communication">

            <option value="20">
                Beginner
            </option>

            <option value="50">
                Basic
            </option>

            <option value="75">
                Good
            </option>

            <option value="100">
                Excellent
            </option>

        </select>

    </div>


    <!-- QUESTION 5 -->

    <div class="question">

        <label>
            5. How much project experience do you have?
        </label>

        <select id="projects">

            <option value="20">
                No project experience
            </option>

            <option value="50">
                Academic projects
            </option>

            <option value="75">
                Multiple projects
            </option>

            <option value="100">
                Industry-level projects
            </option>

        </select>

    </div>


    <!-- QUESTION 6 -->

    <div class="question">

        <label>
            6. How familiar are you with Git/GitHub?
        </label>

        <select id="github">

            <option value="20">
                Beginner
            </option>

            <option value="50">
                Basic
            </option>

            <option value="75">
                Intermediate
            </option>

            <option value="100">
                Advanced
            </option>

        </select>

    </div>


    <button onclick="calculateAssessment()">

        Analyze My Skills 🚀

    </button>

`;

modal.style.display = "flex";
```

}

// =====================================================
// 5. CALCULATE SKILL SCORE
// =====================================================

function calculateAssessment() {

```
const programming =
    Number(document.getElementById("programming").value);

const problemSolving =
    Number(document.getElementById("problemSolving").value);

const sql =
    Number(document.getElementById("sql").value);

const communication =
    Number(document.getElementById("communication").value);

const projects =
    Number(document.getElementById("projects").value);

const github =
    Number(document.getElementById("github").value);


// Calculate average

const score = Math.round(

    (
        programming +
        problemSolving +
        sql +
        communication +
        projects +
        github

    ) / 6

);


// Determine level

let level;

if (score >= 85) {

    level = "Excellent";

}

else if (score >= 70) {

    level = "Industry Ready";

}

else if (score >= 50) {

    level = "Developing";

}

else {

    level = "Beginner";

}


// Find skill gaps

let gaps = [];


if (programming < 70) {

    gaps.push("Programming");

}

if (problemSolving < 70) {

    gaps.push("Problem Solving");

}

if (sql < 70) {

    gaps.push("SQL / Database");

}

if (communication < 70) {

    gaps.push("Communication");

}

if (projects < 70) {

    gaps.push("Project Experience");

}

if (github < 70) {

    gaps.push("Git / GitHub");

}


// Save assessment

const assessment = {

    score: score,

    level: level,

    programming: programming,

    problemSolving: problemSolving,

    sql: sql,

    communication: communication,

    projects: projects,

    github: github,

    gaps: gaps

};


localStorage.setItem(

    "skillAssessment",

    JSON.stringify(assessment)

);


// Display result

showAssessmentResult(
    score,
    level,
    gaps
);
```

}

// =====================================================
// 6. SHOW ASSESSMENT RESULT
// =====================================================

function showAssessmentResult(
score,
level,
gaps
) {

```
let gapHTML = "";


if (gaps.length === 0) {

    gapHTML = `

        <p class="good-message">

            🎉 Excellent!
            No major skill gaps detected.

        </p>

    `;

}

else {

    gapHTML = `

        <h3>⚠️ Recommended Areas</h3>

        <div class="gap-list">

            ${gaps.map(function(gap) {

                return `
                    <span>
                        ${gap}
                    </span>
                `;

            }).join("")}

        </div>

    `;

}


modalBody.innerHTML = `

    <div class="assessment-result">

        <h2>
            📊 Your Skill Analysis
        </h2>


        <div class="score-circle">

            <strong>
                ${score}%
            </strong>

            <span>
                Industry Readiness
            </span>

        </div>


        <h3>
            Level:
            <span style="color:#4f46e5;">
                ${level}
            </span>
        </h3>


        ${gapHTML}


        <div class="recommendation">

            <h3>
                🤖 AI Recommendation
            </h3>

            <p>

                Based on your assessment,
                SkillBridge AI recommends improving
                your identified skill gaps through
                courses, projects, certifications and
                industry internships.

            </p>

        </div>


        <button onclick="showLearningPath()">

            View Personalized Learning Path →

        </button>

    </div>

`;
```

}

// =====================================================
// 7. PERSONALIZED LEARNING PATH
// =====================================================

function showLearningPath() {

```
const data =
    JSON.parse(
        localStorage.getItem("skillAssessment")
    );


if (!data) {

    alert("Please complete the assessment first.");

    return;

}


let learning = "";


if (data.programming < 70) {

    learning += `

        <div class="learning-item">

            <strong>💻 Programming Fundamentals</strong>

            <p>
                Practice C, Python and problem-solving
                fundamentals.
            </p>

        </div>

    `;

}


if (data.problemSolving < 70) {

    learning += `

        <div class="learning-item">

            <strong>🧩 Data Structures & Algorithms</strong>

            <p>
                Practice arrays, strings, searching,
                sorting and basic algorithms.
            </p>

        </div>

    `;

}


if (data.sql < 70) {

    learning += `

        <div class="learning-item">

            <strong>🗄️ SQL & Databases</strong>

            <p>
                Learn queries, joins, relationships,
                aggregation and database design.
            </p>

        </div>

    `;

}


if (data.projects < 70) {

    learning += `

        <div class="learning-item">

            <strong>🏗️ Build Industry Projects</strong>

            <p>
                Complete real-world projects to improve
                practical experience.
            </p>

        </div>

    `;

}


if (data.github < 70) {

    learning += `

        <div class="learning-item">

            <strong>🐙 Git & GitHub</strong>

            <p>
                Learn version control and maintain a
                professional project portfolio.
            </p>

        </div>

    `;

}


if (learning === "") {

    learning = `

        <div class="learning-item">

            <strong>🚀 Advanced Industry Projects</strong>

            <p>
                You can focus on advanced projects,
                internships and placement preparation.
            </p>

        </div>

    `;

}


modalBody.innerHTML = `

    <h2>
        📚 Your Personalized Learning Path
    </h2>

    <p class="modal-description">

        SkillBridge AI recommends the following
        learning journey based on your assessment.

    </p>

    ${learning}


    <button onclick="closeModal()">

        Go To Dashboard

    </button>

`;
```

}

// =====================================================
// 8. CLOSE MODAL
// =====================================================

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

// =====================================================
// 9. CHECK USER WHEN WEBSITE OPENS
// =====================================================

window.addEventListener(
"load",
function() {

```
    const student =
        localStorage.getItem("studentData");


    if (student) {

        const data =
            JSON.parse(student);

        console.log(
            "Welcome back, " + data.name
        );

    }

}
```

);
