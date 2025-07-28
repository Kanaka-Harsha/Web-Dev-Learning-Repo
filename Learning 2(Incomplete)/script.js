// The updated and SECURE script!
window.onload = function() {
    const submit = document.getElementById("submitbtn");
    const form = document.getElementById("form");
    const tableBody = document.querySelector("#table tbody");

    submit.addEventListener("click", async function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('name');
        const idInput = document.getElementById('id');
        const emailInput = document.getElementById('email');

        const name = usernameInput.value;
        const id = idInput.value;
        const email = emailInput.value;

        if (!name || !id || !email) {
            alert('Please fill out all fields.');
            return;
        }

        const formData = { name, id, email };

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const result = await response.json();

            if (response.ok) {
                alert('Success! ' + result.message);

                // --- SECURITY CORRECTION ---
                // This is the safe way to add rows and prevent XSS attacks.
                const newRow = tableBody.insertRow(); // Create a new <tr> element

                const nameCell = newRow.insertCell(); // Create a <td>
                nameCell.textContent = name; // Set its text safely

                const idCell = newRow.insertCell(); // Create a <td>
                idCell.textContent = id; // Set its text safely

                const emailCell = newRow.insertCell(); // Create a <td>
                emailCell.textContent = email; // Set its text safely
                // --- END OF SECURITY CORRECTION ---

                form.reset();
            } else {
                throw new Error(result.message);
            }

        } catch (error) {
            console.error('Error during fetch:', error);
            alert('An error occurred: ' + error.message);
        }
    });

    form.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            submit.click();
        }
    });
};