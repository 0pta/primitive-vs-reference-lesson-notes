// Given the following code:

var g48 = {
  instructors: ['Wes', 'Adam', 'Derek'],
  location: {
    city: 'Seattle',
    state: 'Washington'
  },
  students: 19
}

// Will the following code change the original object?

let instructor = g48.instructors
instructors.push('Jake', 'Scott', 'Roger')

console.log(g48, instructor)
