document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    userName: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    alert(data.message || "Signup successful!");

  } catch (error) {
    alert("Signup failed. Please try again.");
    console.error(error);
  }
});
