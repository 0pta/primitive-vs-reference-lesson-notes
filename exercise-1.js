// What will get logged in each case?

var bestTeacher = 'Derek' // 'Wes'
var worstTeacher = bestTeacher // 'Derek'

bestTeacher = 'Wes'
averageTeacher = bestTeacher

console.log('\nExample 1:')
console.log(bestTeacher, averageTeacher, worstTeacher)

// ---

var bestTeachers = ['Derek', 'Wes', 'Adam']
var worstTeachers = bestTeachers

worstTeachers[0] = 'Also Wes'

console.log('\nExample 2:')
console.log(bestTeachers, worstTeachers)
