/*
* // The organizational structure of a company is provided as a tree. The tree is structured as an object keyed by employee name. The value for a given key is a list of names of people who report to that employee. The list of reports may be empty.

// Example input:
const tree = {
  'Jane Mayer': ['Baraka Tumuti', 'Sarah Lee', 'David Heinsburg'],
  'Baraka Tumuti': ['Abida Begum'],
  'Sarah Lee': ['David Gibbly', 'Kelsey Hamming'],
  'David Heinsburg': [],
  'Abida Begum': ['Dave Bunt', 'James Ray'],
  'David Gibbly': [],
  'Kelsey Hamming': [],
  'Dave Bunt': [],
  'James Ray': [],
};

// Given the name of an employee, print all of the names in the part of the organization they lead.

// Examples:

// Input: "Jane Mayer"
// Output (in any order):
//  Jane Mayer
//  Baraka Tumuti
//  Sarah Lee
//  David Heinsburg
//  Abida Begum
//  David Gibbly
//  Kelsey Hamming
//  Dave Bunt
//  James Ray

// Input: "Abida Begum"
// Output (in any order):
//  Abida Begum
//  Dave Bunt
//  James Ray

// Input: "James Ray"
// Output (in any order):
//  James Ray

function printSuborg(leader) {
  console.log(leader);
}
* */


const tree = {
    'Jane Mayer': ['Baraka Tumuti', 'Sarah Lee', 'David Heinsburg'],
    'Baraka Tumuti': ['Abida Begum'],
    'Sarah Lee': ['David Gibbly', 'Kelsey Hamming'],
    'David Heinsburg': [],
    'Abida Begum': ['Dave Bunt', 'James Ray'],
    'David Gibbly': [],
    'Kelsey Hamming': [],
    'Dave Bunt': [],
    'James Ray': [],
};

function printSuborg(leader) {
    let empStack = [leader]
    let empFoundInOrg = [leader]
    let endOfStack = empStack.length
    while (endOfStack !== 0) {
        let nextKey = empStack.pop()
        let orgList = tree[nextKey]
        for (let i of orgList) {
            empStack.push(i)
            empFoundInOrg.push(i)
        }
        endOfStack = empStack.length
    }
    console.log(empFoundInOrg)
}

printSuborg('Jane Mayer')
printSuborg('Abida Begum')


