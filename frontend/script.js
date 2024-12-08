


// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const loginLogoutBtn = document.getElementById('login-logout-btn');

    // Check if there's a token in localStorage
    const token = localStorage.getItem('login-user');

    // If the token exists, display "Logout"
    if (token) {
        loginLogoutBtn.textContent = 'Logout';
        loginLogoutBtn.onclick = () => {
            // Remove the token from localStorage to log out the user
            localStorage.removeItem('login-user');
            window.location.href = '/'; // Redirect to home page after logging out
        };
    } else {
        // If no token, display "Login" and redirect to login page when clicked
        loginLogoutBtn.textContent = 'Login';
        loginLogoutBtn.onclick = () => {
            window.location.href = '/login.html'; // Replace with your login page URL
        };
    }



    // ===================================

    const form = document.querySelector("#appointmentForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        mentor: form.mentor.value,
        date: form.date.value,
        time: form.time.value,
        email: form.email.value,
        notes: form.notes.value,
    };

    try {
        const response = await fetch("https://golink-platform.onrender.com/api/appointments/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Error booking appointment:", error);
    }
});
});

// ============================================================