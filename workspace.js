import workspaces from "./listWorkspace.js";
const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];
const container = document.getElementById('container');

// Function to display workspace data
function displayWorkspaces() {
    // Clear previous content in the container
    container.innerHTML = '';

    // Check if there are workspaces to display
    if (storedWorkspaces.length > 0) {
        // Iterate through each workspace and create HTML elements
        storedWorkspaces.forEach(workspace => {
            // Create a div to hold workspace information
           

            const workspaceDiv = document.createElement('div');
            workspaceDiv.classList.add('workspace-item'); // Add a class for styling
            let i=1;
            const index = document.createElement('p');
            index.textContent = `Number: ${i}`;
            // Create HTML elements for each workspace property
            const address = document.createElement('p');
            address.textContent = `Address: ${workspace.address}`;

            const type = document.createElement('p');
            type.textContent = `Type: ${workspace.type}`;

            const individuals = document.createElement('p');
            individuals.textContent = `Individuals Allowed: ${workspace.individuals}`;

            const smoking = document.createElement('p');
            smoking.textContent = `Smoking Allowed: ${workspace.smoking}`;

            const availabilityDate = document.createElement('p');
            availabilityDate.textContent = `Availability Date: ${workspace.availabilityDate}`;

            const leaseTerm = document.createElement('p');
            leaseTerm.textContent = `Lease Term: ${workspace.leaseTerm}`;

            const price = document.createElement('p');
            price.textContent = `Price: ${workspace.price}`;

            // Append each property element to the workspace div
            workspaceDiv.appendChild(index);
            workspaceDiv.appendChild(address);
            workspaceDiv.appendChild(type);
            workspaceDiv.appendChild(individuals);
            workspaceDiv.appendChild(smoking);
            workspaceDiv.appendChild(availabilityDate);
            workspaceDiv.appendChild(leaseTerm);
            workspaceDiv.appendChild(price);

            // Append the workspace div to the container
            container.appendChild(workspaceDiv);
        });
    } else {
        // Display a message if there are no workspaces
        const noWorkspacesMessage = document.createElement('p');
        noWorkspacesMessage.textContent = 'No workspaces available.';
        container.appendChild(noWorkspacesMessage);
    }
}

// Call the displayWorkspaces function to initially display the workspaces
displayWorkspaces();
