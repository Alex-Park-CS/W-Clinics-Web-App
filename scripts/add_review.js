document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class name "star" and store them in the "stars" variable
    const stars = document.querySelectorAll('.star');

    // Iterate through each star element
    stars.forEach((star, index) => {
        // Add a click event listener to the current star
        star.addEventListener('click', () => {
            // Fill in clicked star and stars before it
            for (let i = 0; i <= index; i++) {
                // Change the text content of stars to 'star' (filled)
                document.getElementById(`star${i + 1}`).textContent = 'star';
            }
        });
    });
});
