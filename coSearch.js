import properties from "./listProper.js"
import workspaces from "./listWorkspace.js";
const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];

// Function to sort properties or workspaces based on selected criteria
function sortData(criteria) {
    let sortedData;

    // Check which criteria was selected for sorting
    switch (criteria) {
        case 'price':
            // Sort properties or workspaces by price
            sortedData = storedProperties.concat(storedWorkspaces).sort((a, b) => a.price - b.price);
            break;
        case 'area':
            // Sort properties or workspaces by area (square feet)
            sortedData = storedProperties.concat(storedWorkspaces).sort((a, b) => a.squareFeet - b.squareFeet);
            break;
        // Add more cases for other sorting criteria as needed
        default:
            // If no valid criteria is selected, return unsorted data
            sortedData = storedProperties.concat(storedWorkspaces);
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
        if(sortedData.length>0){
           
           
        sortResults.innerHTML = '';

        // Display the sorted data in the sortResults div
        sortedData.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = `Address: ${item.address}, Price: ${item.price}`;
            sortResults.appendChild(listItem);
        
        });
    }
    else{
        sortResults.textContent = 'No results found.';
    }
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

        // Retrieve properties and workspaces from local storage
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
        const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];

        // Perform search in both properties and workspaces arrays
        const searchResults = [...storedProperties, ...storedWorkspaces].filter(item => {
            // Convert the search term and item's property to lowercase for case-insensitive comparison
            const itemValue = item[searchBy].toString().toLowerCase();
            return itemValue.includes(searchTerm);
        });

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
                `;
                searchResultsDiv.appendChild(resultDiv);
            });
        } else {
            searchResultsDiv.textContent = 'No results found.';
        }
    });
});
