// Initialize an array to store workspaces
let workspaces = [];




document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add');
    const workspaceForm = document.querySelector('.property-signup-form');

    // Retrieve workspaces array from local storage
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces'));
    if (storedWorkspaces) {
        workspaces = storedWorkspaces;
        console.log('Workspaces array retrieved from local storage:', workspaces);
    }

    workspaceForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const address = document.getElementById('address').value;
        const type = document.getElementById('type').value;
        const individuals = document.getElementById('individuals').value;
        const smoking = document.querySelector('input[name="smoking"]:checked');
        const availabilityDate = document.getElementById('availability-date').value;
        const leaseTerm = document.getElementById('lease-term').value;
        const price = document.getElementById('price').value;

        

        // Create workspace object
        const workspace = {
            address: address,
            type: type,
            individuals: individuals,
            smoking: smoking.value,
            availabilityDate: availabilityDate,
            leaseTerm: leaseTerm,
            price: price
        };

        // Add workspace object to the array
        workspaces.push(workspace);
        console.log('Workspaces array after adding:', workspaces); // Display the array in the console (for testing)

        // Save workspaces array to local storage
        localStorage.setItem('workspaces', JSON.stringify(workspaces));

        // Clear form inputs after submission
        workspaceForm.reset();
    });
    console.log('Workspaces array after adding:', workspaces);
});
// Export the workspaces array
export default workspaces;