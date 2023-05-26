
const mountainSelect = document.getElementById("mountainSelect");

function loadMountainDropdown() {
    console.log(mountainsArray);
    for (const mountain of mountainsArray) {
        const option = document.createElement("option");
        option.value = mountain.name;
        option.textContent = mountain.name;
        mountainSelect.appendChild(option);
        
        
    }
}

function putMountainInfos() {
    const selectedMountain = mountainSelect.value;
    const mountainInfos = document.getElementById("mountainInfos");
  
    // Use the "selected" mountain in the mountainsArray
    const selectedMountainStuff = mountainsArray.find( (mountain) => mountain.name === selectedMountain
      
    );
  
    // Put the mountain informations as a HTML in Javascript
    mountainInfos.innerHTML = `
      <h2>${selectedMountainStuff.name}</h2>
      <p>Description: ${selectedMountainStuff.desc}<p>
      <p>Elevation: ${selectedMountainStuff.elevation}<p>
      <!-- Display any other relevant mountain information -->
    `;
  }

// Use an addEvenfor when the mountain select dropdown changes
mountainSelect.addEventListener("change", putMountainInfos);

loadMountainDropdown();