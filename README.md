# StateDataLibrary


##### This function takes a state name as a parameter as a string and will give the user the state code that corresponds with the name of state. It will loop through the list stateName and check to see if the state name at index i is equal to the parameter, if they are equal it will return the state code at index i.

###### state {string} - the name of a state in the US used to find the corresponsing state code

###### return {string} - the matching state code or an error message

**`function getCodeName(state)`**
#
//This function takes a year as a parameter as a number and gives the user a list of states whose admission year was before or on the year entered by the user. It will loop through the list stateName and check to see if the stateYear at index i is less than or equal to the year entered by the user. The function will return the list of matching states that fit the parameters in the if statement.

//year {number} - a year used to compare to the states admission years

//return {string} - the matching state or a message stating there are no matching states

function findAdmissionYear(year)

//This function takes a population number as a parameter as a number and gives the user a list of states whose population is greater than or equal to the number provided by the user. It will check to see if the state population at index i is greater than or equal to the parameter entered by the user. The function will return the list of matching states that fit the parameteres in the if statement.

//population {number} - a population number used to compare to the states admission years

//return {string} - the matching state or a message stating there are no matching states

function findPopulation(population)

//This function takes a rank as a number and gives the user a list of states whose admission rank is greater than or equal to the number provided by the user. It will check to see if the state admission rank at index i is greater than or equal to the parameter entered by the user. The function will return the list of matching states that fit the parameteres in the if statement.

//rank{number} - a rank number used to compare to the states admission years

//return {string} - the matching state or a message stating there are no matching states

function findAdmissionRank(rank)

//This function takes an income as a number and gives the user a list of states whose median home income is less than or equal to the number provided by the user. It will check to see if the median home income at index i is less than or equal to the parameter entered by the user. The function will return the list of matching states that fit the parameteres in the if statement.

//income {number} - an income number used to compare to the states admission years

//return {string} - the matching state or a message stating there are no matching states

function findmedianIncome(income)
