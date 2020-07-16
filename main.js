const fs = require('fs')

const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8')

const getTotalCasesByDay = require('./get-total-cases-by-day.js')
const getNewCasesByDay = require('./get-new-cases-by-day')
const getRows = require('./get-rows.js')
const getRow = require('./get-row.js')

const array = getRows(file)

let queryType = process.argv[2];
let date = process.argv[3]

if(queryType === undefined){
    console.log(`Please input a query type of "new" or "total".`)
}else if(queryType === 'new'){
    console.log(getNewCasesByDay(date, array))
}else if(queryType = 'total'){
    console.log(getTotalCasesByDay(date, array))
}
