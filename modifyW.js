import workspaces  from './listWorkspace.js';
 
 
 document.addEventListener('DOMContentLoaded', function () {
    const modifyForm = document.getElementById('modify-workspace');
    const selectWorkspace = document.getElementById('property-type');

    // Retrieve workspaces array from local storage
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces'));
    if (storedWorkspaces && Array.isArray(storedWorkspaces)) {
        // Populate select options with addresses from stored workspaces array
        storedWorkspaces.forEach(workspace => {
            const option = document.createElement('option');
            option.value = workspace.address;
            option.textContent = workspace.address;
            selectWorkspace.appendChild(option);
        });
    } 

    // Add event listener to the form's submit event
    modifyForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get selected workspace address and form inputs
        const selectedAddress = selectWorkspace.value;
        const type = document.getElementById('type').value;
        const individuals = document.getElementById('individuals').value;
        const smoking = document.querySelector('input[name="smoking"]:checked').value;
        const availabilityDate = document.getElementById('availability-date').value;
        const leaseTerm = document.getElementById('lease-term').value;
        const price = document.getElementById('price').value;

        // Find the selected workspace in the stored workspaces array
        const selectedWorkspace = storedWorkspaces.find(workspace => workspace.address === selectedAddress);

        if (selectedWorkspace) {
            // Update the selected workspace's properties
            selectedWorkspace.type = type;
            selectedWorkspace.individuals = individuals;
            selectedWorkspace.smoking = smoking;
            selectedWorkspace.availabilityDate = availabilityDate;
            selectedWorkspace.leaseTerm = leaseTerm;
            selectedWorkspace.price = price;

            // Update local storage with the modified workspaces array
            localStorage.setItem('workspaces', JSON.stringify(storedWorkspaces));

            // Display success message or perform other actions as needed
            alert('Workspace modified successfully!');
        } 

        // Clear form inputs after submission
        modifyForm.reset();
    });
});
