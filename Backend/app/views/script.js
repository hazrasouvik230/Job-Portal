const BASE_URL = "http://localhost:3000"; // e.g., 3000
let token = null;
let role = null;

// Register
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    name: regName.value,
    email: regEmail.value,
    password: regPassword.value,
    role: regRole.value
  };

  const res = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  alert(data.message || JSON.stringify(data));
});

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    email: loginEmail.value,
    password: loginPassword.value
  };

  const res = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (data.token) {
    token = data.token;
    role = data.user.role;
    document.getElementById("auth").classList.add("hidden");
    document.getElementById("jobSection").classList.remove("hidden");
    alert("Login successful!");
  } else {
    alert(data.error || "Login failed");
  }
});

// Create Job
document.getElementById("jobForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    title: title.value,
    company: company.value,
    location: location.value,
    jobType: jobType.value,
    experienceLevel: experienceLevel.value,
    salary: salary.value,
    deadline: deadline.value,
    description: description.value
  };

  const res = await fetch(`${BASE_URL}/api/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  output.innerText = JSON.stringify(data, null, 2);
});

// Apply to Job
document.getElementById("applyForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const jobId = jobIdApply.value;

  const res = await fetch(`${BASE_URL}/api/job/${jobId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });

  const data = await res.json();
  output.innerText = JSON.stringify(data, null, 2);
});

// View Applicants
document.getElementById("viewApplicantsForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const jobId = jobIdView.value;

  const res = await fetch(`${BASE_URL}/api/job/${jobId}`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });

  const data = await res.json();
  output.innerText = JSON.stringify(data, null, 2);
});
