import properties from "./listProper.js";

document.addEventListener('DOMContentLoaded', function () {
    const selectProperty = document.getElementById('property-type');
    const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    const modifyForm = document.getElementById('delist-form');

    if (storedProperties && Array.isArray(storedProperties)) {
        // Populate select options with addresses from stored properties array
        storedProperties.forEach(property => {
            const option = document.createElement('option');
            option.value = property.address;
            option.textContent = property.address;
            selectProperty.appendChild(option);
        });
    }

    modifyForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get selected property address
        const selectedAddress = selectProperty.value;

        // Find the index of the selected property in the storedProperties array
        const selectedIndex = storedProperties.findIndex(property => property.address === selectedAddress);

        if (selectedIndex !== -1) {
            // Remove the selected property from the storedProperties array
            storedProperties.splice(selectedIndex, 1);

            // Update local storage with the modified properties array
            localStorage.setItem('properties', JSON.stringify(storedProperties));

            // Display success message or perform other actions as needed
            alert('Property deleted successfully!');

            // Remove the option from the select element
            selectProperty.removeChild(selectProperty.options[selectProperty.selectedIndex]);

            // Log the updated properties array to the console
            console.log('Properties array after deletion:', storedProperties);
        } 
    });
});
