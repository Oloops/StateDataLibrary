var url = "https://raw.githubusercontent.com/Oloops/Random-Cat-Facts/main/US%20States.csv"

const stateName = getColumn(url, 1);
const stateCode = getColumn(url, 2);
const stateYear = getColumn(url, 5);
const statePop = getColumn(url, 9);
const stateRank = getColumn(url, 6);
const medianInc = getColumn(url, 18);


//This function takes a state name as a parameter as a string and will give the user the state code that corresponds with the name of state. It will loop through the list stateName and check to see if the state name at index i is equal to the parameter, if they are equal it will return the state code at index i.
//state {string} - the name of a state in the US used to find the corresponsing state code
//return {string} - the matching state code or an error message
function getCodeName(state){
state = state.toString();
state=state.toLowerCase()
  for(var i in stateName){
    if(stateName[i].toLowerCase() == state){
      return(stateCode[i]);
    }
  }
  return ("Enter a valid state name");
}

//This function takes a year as a parameter as a number and gives the user a list of states whose admission year was before or on the year entered by the user. It will loop through the list stateName and check to see if the stateYear at index i is less than or equal to the year entered by the user. The function will return the list of matching states that fit the parameters in the if statement.
//year {number} - a year used to compare to the states admission years
//return {string} - the matching state or a message stating there are no matching states
function findAdmissionYear(year){
  var matchingStates = [];
if(typeof year === 'string'){
  return("Enter a valid year")
}
else{
  for(var i in stateName){
    if(stateYear[i] <= year){
      matchingStates.push(stateName[i]);
    }
    
  }

  if(matchingStates.length > 0) {
  return(matchingStates);
  }
  else {
  return ("There are no matching states")
  }
}
}
//This function takes a population number as a parameter as a number and gives the user a list of states whose population is greater than or equal to the number provided by the user. It will check to see if the state population at index i is greater than or equal to the parameter entered by the user. The function will return the list of matching states that fit the parameteres in the if statement.
//population {number} - a population number used to compare to the states admission years
//return {string} - the matching state or a message stating there are no matching states
function findPopulation(population){
  var matchingStates = [];
if(typeof population === 'string'){
  return("Enter a valid population number")
}
else{
  for(var i in stateName){
    if(statePop[i] >= population){
      matchingStates.push(stateName[i]);
    }
    
  }
  if(matchingStates.length > 0) {
  return(matchingStates);
  }
  else {
  return ("There are no matching states")
  }
  
}
}

//This function takes a rank as a number and gives the user a list of states whose admission rank is greater than or equal to the number provided by the user. It will check to see if the state admission rank at index i is greater than or equal to the parameter entered by the user. The function will return the list of matching states that fit the parameteres in the if statement.
//rank{number} - a rank number used to compare to the states admission years
//return {string} - the matching state or a message stating there are no matching states 
function findAdmissionRank(rank){
var matchingStates = [];
if(typeof rank === 'string'){
  return("Enter a valid rank number between 1-50")
}
else{
for(var i in stateName){
    if(stateRank[i] >= rank){
      matchingStates.push(stateName[i]);
    }
  }
  if(matchingStates.length > 0) {
  return(matchingStates);
  }
  else {
  return ("There are no matching states")
  }
}
}

//This function takes an income as a number and gives the user a list of states whose median home income is less than or equal to the number provided by the user. It will check to see if the median home income at index i is less than or equal to the parameter entered by the user. The function will return the list of matching states that fit the parameteres in the if statement.
//income {number} - an income number used to compare to the states admission years
//return {string} - the matching state or a message stating there are no matching states
function findMedianIncome(income){
  var matchingStates = [];
if(typeof income === 'string'){
  return("Enter a valid income number")
}
else{
for(var i in stateName){
    if(medianInc[i] <= income){
      matchingStates.push(stateName[i]);
    }
  }
  if(matchingStates.length > 0) {
  return(matchingStates);
  }
  else {
  return ("There are no matching states")
  }
}
}

//------------------------------------------------------//
function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
