import properties from "./listProper.js"
document.addEventListener('DOMContentLoaded', function () {
    const modifyForm = document.getElementById('modify-property');
    const selectProperty = document.getElementById('property-type');
    const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];

    if (storedProperties && Array.isArray(storedProperties)) {
        // Populate select options with addresses from stored properties array
        storedProperties.forEach(property => {
            const option = document.createElement('option');
            option.value = property.address;
            option.textContent = property.address;
            selectProperty.appendChild(option);
        });
    }

    // Add event listener to the form's submit event
    modifyForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get selected property address and form inputs
        const selectedAddress = selectProperty.value;
        const address = document.getElementById('address').value;
        const neighborhood = document.getElementById('neighborhood').value;
        const squareFeet = document.getElementById('square-feet').value;
        const parking = document.querySelector('input[name="parking-garage"]:checked').value;
        const publicTransportation = document.querySelector('input[name="public-transportation"]:checked').value;

        // Find the selected property in the stored properties array
        const selectedProperty = storedProperties.find(property => property.address === selectedAddress);

        if (selectedProperty) {
            // Update the selected property's values
            selectedProperty.address = address;
            selectedProperty.neighborhood = neighborhood;
            selectedProperty.squareFeet = squareFeet;
            selectedProperty.parking = parking;
            selectedProperty.publicTransportation = publicTransportation;

            // Update local storage with the modified properties array
            localStorage.setItem('properties', JSON.stringify(storedProperties));

            
            
        } 

        // Clear form inputs after submission
        modifyForm.reset();
    });
});

