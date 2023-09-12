//! Задание 1
// let Name = "Богдан"
// let age = 14 
// let isStudent = true

// var grades = [3958, 345, 99999]

// var student = ['Коля', 'Петя', 'Вася']

//! Задание 2
// console.log(typeof(Name))
// console.log(typeof(age))
// console.log(typeof(isStudent))
// console.log(typeof(grades))
// console.log(typeof(students))
// console.log('----------------')
//! Задание 3
// var i = 0

// while(i <= 3) {
//     console.log(student[i])
//     i++;
// }

//! Задание 4 
// let sum = 0
// let srednee = 0
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i]
//         srednee += grades[i] / grades.length
//     }
//     console.log(sum, srednee)

//! Задание 5
// var a = 0
// var newArray = []

// for (let i = 0; i < grades.length; i++) {
//     a += grades[i]
//     newArray = [grades[i]*10]
// }

//! Задание 6
// var object = {
//     name: 'Валера',
//     age: 15,
//     gradess: grades
// }

//! Задание 7
let avg_sum = 0
class Student {
    constructor(name, age, grades){
        this.name = name
        this.age = age
        this.grades = grades
    }

    avgBall() {
        for (let i = 0; i < this.grades.length; i++) {
            summa += this.grades[i]
            avg_sum = summa / this.grades.length
        }
        return avg_sum
    }
}

let student_8 = new Student('Валера', 19, [54, 63, 96, 10])

const btn = document.getElementById('hit-2-check')
const name_student = document.getElementById('name-id')
const avg_scores = document.getElementById('avg_score')
const age_student = document.getElementById('age-id')
const marks = document.getElementById('marks-id')


// btn.addEventListener('click', () => {
//     avg_scores.innerHTML = `Средний балл оценок: ${student_8.avgBall}`
//     student_8.avgBall = 0
// })

btn.addEventListener('click', () => {
    name_student.innerHTML = `Имя: ${student_8.name}`
})

btn.addEventListener('click', () => {
    // marks.innerHTML = `Оценки: ${student_8.grades}`
    marks.innerHTML = `Оценки: ${student_8.grades}`
})

btn.addEventListener('click', () => {
    age_student.innerHTML = `Лет: ${student_8.age}`
})