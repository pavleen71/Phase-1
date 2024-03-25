import properties from "./listProper.js";

const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    // Display properties in the container div
    function displayProperties() {
        // Clear previous content
        container.innerHTML = '';

        // Check if there are properties to display
        if (storedProperties.length > 0) {
            // Create a table to display properties
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Address</th>
                    <th>Neighborhood</th>
                    <th>Square Feet</th>
                   <th>Parking Garage</th>
                    <th>Public Transportation</th>
                </tr>
            `;

            // Iterate over each property and create a table row for it
            storedProperties.forEach(property => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${property.address}</td>
                    <td>${property.neighborhood}</td>
                    <td>${property.squareFeet}</td>
                    <td>${property.parking}</td>
                    <td>${property.publicTransportation}</td>
                   
                `;
                table.appendChild(row);
            });

            // Append the table to the container div
            container.appendChild(table);
        } else {
            // Display a message if there are no properties
            container.textContent = 'No properties available.';
        }
    }

    // Call the displayProperties function initially
    displayProperties();
});
