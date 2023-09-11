//? код ни разу не запускал 😉
//! Задание 1
let Name = "Богдан"
let age = 14 
let isStudent = true

var grades = [3958, 345, 99999]

var student = ['Коля', 'Петя', 'Вася']

//! Задание 2
console.log(typeof(Name))
console.log(typeof(age))
console.log(typeof(isStudent))
console.log(typeof(grades))
console.log(typeof(students))
console.log('----------------')
//! Задание 3
var i = 0

while(i <= 3) {
    console.log(student[i])
    i++;
}

//! Задание 4 
var o = 0
var sum = 0
var srednee = 0

while(0 <= 4) {
    i++ 
    sum += grades[i]
    srednee = sum / grades.length
}

//! Задание 5
var a = 0
var newArray = []

while(a <= 4) {
    i++ 
    newArray = [grades[i]*10]
}

//! Задание 6
var object = {
    name: 'Валера',
    age: 15,
    gradess: grades
}

//! Задание 7
class Student {
    constructor(name, age, grades){
        this.name = name
        this.age = age
        this.grades = grades
        this.srednee = srednee
    }

    sredneee() {
        return srednee
    }
}