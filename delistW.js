import workspaces from "./listWorkspace.js";

document.addEventListener('DOMContentLoaded', function () {
    const selectProperty = document.getElementById('property-type');
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];
    const modifyForm = document.getElementById('delist-form');

    if (storedWorkspaces && Array.isArray(storedWorkspaces)) {
        // Populate select options with addresses from stored workspaces array
        storedWorkspaces.forEach(workspace => {
            const option = document.createElement('option');
            option.value = workspace.address;
            option.textContent = workspace.address;
            selectProperty.appendChild(option);
        });
    }

    modifyForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get selected workspace address
        const selectedAddress = selectProperty.value;

        // Find the index of the selected workspace in the storedWorkspaces array
        const selectedIndex = storedWorkspaces.findIndex(workspace => workspace.address === selectedAddress);

        if (selectedIndex !== -1) {
            // Remove the selected workspace from the storedWorkspaces array
            storedWorkspaces.splice(selectedIndex, 1);

            // Update local storage with the modified workspaces array
            localStorage.setItem('workspaces', JSON.stringify(storedWorkspaces));

            // Display success message or perform other actions as needed
            alert('Workspace deleted successfully!');

            // Remove the option from the select element
            selectProperty.removeChild(selectProperty.options[selectProperty.selectedIndex]);

            // Log the updated workspaces array to the console
            console.log('Workspaces array after deletion:', storedWorkspaces);
        } 
        
    });
});
