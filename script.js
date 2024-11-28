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
        const response = await fetch("http://localhost:5000/api/appointments/book", {
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
