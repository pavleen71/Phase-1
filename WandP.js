import workspaces from "./listWorkspace.js";
import properties from "./listProper.js";
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    // Fetch properties and workspaces from local storage
    const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];

    // Combine properties and workspaces into one array
    const combinedData = [...storedProperties.map(item => ({ ...item, type: 'Property' })), ...storedWorkspaces.map(item => ({ ...item, type: 'Workspace' }))];

    // Display combined data in the container div
    function displayCombinedData() {
        // Clear previous content
        container.innerHTML = '';

        // Check if there are items to display
        if (combinedData.length > 0) {
            // Create a table to display the combined data
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Individuals</th>
                    <th>Smoking</th>
                    <th>Availability Date</th>
                    <th>Lease Term</th>
                    <th>Price</th>
                </tr>
            `;

            // Iterate over each item in the combined data and create a table row for it
            combinedData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.type}</td>
                    <td>${item.address}</td>
                    <td>${item.individuals || '-'}</td>
                    <td>${item.smoking || '-'}</td>
                    <td>${item.availabilityDate || '-'}</td>
                    <td>${item.leaseTerm || '-'}</td>
                    <td>${item.price || '-'}</td>
                `;
                table.appendChild(row);
            });

            // Append the table to the container div
            container.appendChild(table);
        } else {
            // Display a message if there are no items available
            container.textContent = 'No items available.';
        }
    }

    // Call the displayCombinedData function initially
    displayCombinedData();
});
