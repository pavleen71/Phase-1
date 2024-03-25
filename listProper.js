// Initialize an array to store property data
let properties = [];

document.addEventListener('DOMContentLoaded', function () {
    const propertyForm = document.querySelector('.property-signup-form');

    // Add event listener to the form's submit event
    propertyForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const address = document.getElementById('address').value;
        const neighborhood = document.getElementById('neighborhood').value;
        const squareFeet = document.getElementById('square-feet').value;
        const parking = document.querySelector('input[name="parking-garage"]:checked').value;
        const publicTransportation = document.querySelector('input[name="public-transportation"]:checked').value;

        // Create property object
        const property = {
            address: address,
            neighborhood: neighborhood,
            squareFeet: squareFeet,
            parking: parking,
            publicTransportation: publicTransportation
        };

        // Add property object to the array
        properties.push(property);

        // Save properties array to local storage
        localStorage.setItem('properties', JSON.stringify(properties));

        // Display the array in the console (for testing)
        console.log('Properties array after adding:', properties);

        // Clear form inputs after submission
        propertyForm.reset();

       
    });

    // Retrieve properties array from local storage when the page loads
    const storedProperties = JSON.parse(localStorage.getItem('properties'));
    if (storedProperties) {
        properties = storedProperties;
        console.log('Properties array retrieved from local storage:', properties);
    }
});
//exporting the properties
export default properties;
