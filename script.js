
const scriptURL = "https://script.google.com/macros/s/AKfycbxUwhtPC52_Fu5xS1oh8zfDfilJa7uS1IoFHMJRoRml8fBkIExzs_F35XWhdoARK7ceWg/exec"; // paste your actual URL here
const form = document.getElementById("myForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(response => {
            alert("✅ Data saved to Google Sheet!");
            form.reset();
        })
        .catch(error => {
            console.error("❌ Error!", error.message);
            alert("Something went wrong.");
        });
});

