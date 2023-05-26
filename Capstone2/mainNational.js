

function PutStatesDropdownList(locationArrayStateSelections) {
  let stateNames = "";
  for (i = 0; i < locationArrayStateSelections.length; i += 1) {
    const stateString = locationArrayStateSelections[i]
    stateNames += `<option value=${stateString}>${stateString}</option>`
  }
  return stateNames;
}

function PutStatesToDropdownList() {
  const selectStateElement = document.querySelector("#state-selection");

  selectStateElement.innerHTML = PutStatesDropdownList(locationsArray);

  selectStateElement.onchange = stateChange;
}
