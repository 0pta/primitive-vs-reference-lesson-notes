// Diagram the following:

var g48 = {
  instructors: ['Wes', 'Adam', 'Derek'],
  location: {
    city: 'Seattle',
    state: 'Washington'
  },
  students: 19
}

// Will the following code change the original object?

let students = g48.students
students += 1

console.log(g48, students)
