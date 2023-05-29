window.onload = main;


function main() {
  populateStateDropdown();
  populateParktypeDropdown();
  const selectLocationElement = document.querySelector("#parkLocation");
  selectLocationElement.onchange = parkStateLocation;
  const selectTypeElement = document.querySelector("#parkType");
  selectTypeElement.onchange = parkLocalDesc;
}

//the dropdowns

function populateStateDropdown() {
  const selectLocationElement = document.querySelector("#parkLocation");
  for (const location of locationsArray) {
    const option = document.createElement("option");
    option.value = location;
    option.innerText = location;
    selectLocationElement.append(option);
  }
}

function populateParktypeDropdown() {
  const selectTypeElement = document.querySelector("#parkType");
  for (const parkType of parkTypesArray) {
    const option = document.createElement("option");
    option.value = parkType;
    option.innerText = parkType;
    selectTypeElement.append(option);
  }
}

// this is a function to run both states & location

function parkStateLocation(changeEvent) {
  const parkCardsContainer = document.querySelector("#parkCards");
  const inState = changeEvent.target.value;
  const matchedState = filterStateData(inState);
  console.log(inState);

  
  parkCardsContainer.innerHTML = "";

  matchedState.forEach((element) => {
    const parkCard = createParkCard(element);
    parkCardsContainer.appendChild(parkCard);
  });
}

//this is a filter to run states & location

function filterStateData(inState) {
  const parkStateLocation = nationalParksArray.filter((parkItem) => parkItem.State === inState);
    
  
  return parkStateLocation;
}

//function to run park type 

function parkLocalDesc(changeEvent) {
  const parkCardsContainer = document.querySelector("#parkCards");
  const myLocal = changeEvent.target.value;
  const matchedParks = filterParkData(currLocal);
  console.log(myLocal);

  parkCardsContainer.innerHTML = "";

  matchedParks.forEach((parkItem) => {
    const parkCard = createParkCard(parkItem);
    parkCardsContainer.appendChild(parkCard);
  });
}

//filter for park types 

function filterParkData(myLocal) {
  const selectedParks = nationalParksArray.filter((parkItem) =>parkItem.LocationName.includes(myLocal)
  );
  return selectedParks;
}


function createParkCard(park) {
  const parkCard = document.createElement("div");
  parkCard.classList.add("col-lg-4", "col-md-6", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const localName = document.createElement("h5");
  localName.classList.add("card-title");
  localName.innerText = park.LocationName;
  cardBody.appendChild(localName);

  const localAddress = document.createElement("p");
  localAddress.classList.add("card-text");
  localAddress.innerText = park.Address;
  cardBody.appendChild(localAddress);

  const localCity = document.createElement("p");
  localCity.classList.add("card-text");
  localCity.innerText = park.City;
  cardBody.appendChild(localCity);

  card.appendChild(cardBody);
  parkCard.appendChild(card);

  return parkCard;
}