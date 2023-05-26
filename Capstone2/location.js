// the search form element and search area 
const searchBar = document.getElementById("searchBar");
const searchArea = document.getElementById("searchArea");

// using a select for location dropdown
function populateLocationDropdown() {
  const locationDropdown = document.getElementById("location");

  
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "Select Location";
  locationDropdown.appendChild(emptyOption);

  for (const location of locationsArray) {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    locationDropdown.appendChild(option);
  }
}

// using a select for park dropdown
function populateParkTypeDropdown() {
  const parkTypeDropdown = document.getElementById("parkType");

  
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "Select Park Type";
  parkTypeDropdown.appendChild(emptyOption);

  for (const parkType of parkTypesArray) {
    const option = document.createElement("option");
    option.value = parkType;
    option.textContent = parkType;
    parkTypeDropdown.appendChild(option);
  }
}


function handleBarSubmit(event) {
  event.preventDefault();

  // for use of the selected location and park 
  const selectedLocation = document.getElementById("location").value;
  const selectedParkType = document.getElementById("parkType").value;

  // For the use of the national parks based on the selected 
  const filteredParks = nationalParksArray.filter((park) => {
    const matchesLocation = selectedLocation === "" || park.State === selectedLocation;
    const matchesParkType = selectedParkType === "" || park.LocationName.includes(selectedParkType);

    return matchesLocation && matchesParkType;
  });

  // Display the search area
  displaySearchArea(filteredParks);
}

// Function to display the search area
function displaySearchArea(area) {
  searchArea.innerHTML = "";

  if (area.length === 0) {
    searchArea.textContent = "No data found.";
  } else {
    for (const data of data) {
      const parkName = document.createElement("h3");
      parkName.textContent = result.LocationName;

      const address = document.createElement("p");
      address.textContent = `Address: ${area.Address}, ${area.City}, ${area.State}, ${area.ZipCode}`;
       

      const phone = document.createElement("p");
      phone.textContent = `Phone: ${area.Phone}`;

      const fax = document.createElement("p");
      fax.textContent = `Fax: ${area.Fax}`;

      searchArea.appendChild(parkName);
      searchArea.appendChild(address);
      searchArea.appendChild(phone);
      searchArea.appendChild(fax);
      searchArea.appendChild(document.createElement("hr"));
    }
  }
}


searchBar.addEventListener("submit", handleBarSubmit);

// Use the functions to populate the dropdowns initially
populateLocationDropdown();
populateParkTypeDropdown();