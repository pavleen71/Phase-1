import properties from "./listProper.js";
import workspaces from "./listWorkspace.js";

const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
const storedWorkspaces =  JSON.parse(localStorage.getItem('workspaces')) || [];;

// Function to sort properties or workspaces based on selected criteria
function sortData(criteria) {
    let sortedData;

   
    switch (criteria) {
        case 'individuals':
            // Sort by individuals allowed
            sortedData = [...storedProperties, ...storedWorkspaces].sort((a, b) => a.individuals - b.individuals);
            break;
        case 'area':
            // Sort by area (square feet)
            sortedData = [...storedProperties, ...storedWorkspaces].sort((a, b) => a.squareFeet - b.squareFeet);
            break;
        case 'availability':
            // Sort by availability date
            sortedData = [...storedProperties, ...storedWorkspaces].sort((a, b) => new Date(a.availabilityDate) - new Date(b.availabilityDate));
            break;
        case 'leaseTerm':
            // Sort by lease term
            sortedData = [...storedProperties, ...storedWorkspaces].sort((a, b) => a.leaseTerm.localeCompare(b.leaseTerm));
            break;
        case 'price':
            // Sort by price
            sortedData = [...storedProperties, ...storedWorkspaces].sort((a, b) => a.price - b.price);
            break;
        default:
            // If no valid criteria is selected, return unsorted data
            sortedData = [...storedProperties, ...storedWorkspaces];
            break;
    }

    return sortedData;
}

document.addEventListener('DOMContentLoaded', function () {
    const sortForm = document.getElementById('sortForm');
    const sortResults = document.getElementById('sortResults');

    sortForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the selected sorting criteria from the form
        const selectedCriteria = document.getElementById('sortBy').value;

        // Call the sortData function to sort the data based on the selected criteria
        const sortedData = sortData(selectedCriteria);

        // Display the sorted results in the sortResults div
        displaySortedResults(sortedData);
    });

    // Function to display sorted results in the sortResults div
    function displaySortedResults(sortedData) {
        // Clear previous results
        sortResults.innerHTML = '';

        // Display the sorted data in the sortResults div
        sortedData.forEach(item => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `<p><strong>Address:</strong> ${item.address}</p>
            <p><strong>Type:</strong> ${item.type}</p>
            <p><strong>Individuals Allowed:</strong> ${item.individuals}</p>
            <p><strong>Smoking Allowed:</strong> ${item.smoking}</p>
            <p><strong>Availability Date:</strong> ${item.availabilityDate}</p>
            <p><strong>Lease Term:</strong> ${item.leaseTerm}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Squarefeet:</strong> ${item.squareFeet}</p>`;
            sortResults.appendChild(listItem);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchResultsDiv = document.getElementById('searchResults');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the search criteria and term from the form
        const searchBy = document.getElementById('searchBy').value;
        const searchTerm = document.getElementById('searchTerm').value.trim().toLowerCase();

        // Perform search in both properties and workspaces arrays
        const searchResults = [...storedProperties, ...storedWorkspaces].filter(item => {
            // Convert the search term and item's property to lowercase for case-insensitive comparison
            const itemValue = item[searchBy].toString().toLowerCase();
            return itemValue.includes(searchTerm);
        });

        // Print the search results array to the console
        console.log(searchResults);

        // Clear previous search results
        searchResultsDiv.innerHTML = '';

        // Display search results in the searchResultsDiv
        if (searchResults.length > 0) {
            searchResults.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('search-item'); // Add a class for styling
                resultDiv.innerHTML = `
                    <p><strong>Address:</strong> ${result.address}</p>
                    <p><strong>Type:</strong> ${result.type}</p>
                    <p><strong>Individuals Allowed:</strong> ${result.individuals}</p>
                    <p><strong>Smoking Allowed:</strong> ${result.smoking}</p>
                    <p><strong>Availability Date:</strong> ${result.availabilityDate}</p>
                    <p><strong>Lease Term:</strong> ${result.leaseTerm}</p>
                    <p><strong>Price:</strong> ${result.price}</p>
                    <p><strong>Squarefeet:</strong> ${result.squareFeet}</p>
                `;
                searchResultsDiv.appendChild(resultDiv);
            });
        } else {
            searchResultsDiv.textContent = 'No results found.';
        }
    });
});
