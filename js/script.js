'use strict';

function Student(lastName, firstName, birthYear, grades = []) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.grades = grades;

    // 25 classes, initially null.
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;

}

// Method to get age.
Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

// Method for calculating the average score.
Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

// Method for indicating presence.
Student.prototype.present = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex++] = true;
    } else {
        console.log(`${this.lastName} ${this.firstName}: досягнуто максимуму записів відвідуваності`);
    }
};

// Method for indicating absence.
Student.prototype.absent = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex++] = false;
    } else {
        console.log(`${this.lastName} ${this.firstName}: досягнуто максимуму записів відвідуваності`);
    }
};

// Method for summative assessment.
Student.prototype.summary = function () {
    const avgGrade = this.getAverageGrade();
    const visits = this.attendance.filter(v => v !== null);
    const avgAttendance = visits.length === 0 ? 0
        : visits.filter(v => v === true).length / visits.length;

    if (avgGrade > 90 && avgAttendance > 0.9) {
        return "Молодець!";
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};

// Using these methods.
const student1 = new Student("Влад", "Григоренко", 1995, [96, 92, 96, 98]);
const student2 = new Student("Сергій", "Савенков", 1997, [95, 90, 88, 95]);
const student3 = new Student("Василь", "Іваненко", 1973, [80, 70, 55, 58]);

// attends classes almost always.
for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

// 50/50.
for (let i = 0; i < 12; i++) student2.present();
for (let i = 0; i < 13; i++) student2.absent();

// almost doesn't walk.
for (let i = 0; i < 2; i++) student3.present();
for (let i = 0; i < 23; i++) student3.absent();

console.log(`${student1.lastName} (${student1.getAge()} років) → ${student1.summary()}`);
console.log(`${student2.lastName} (${student2.getAge()} років) → ${student2.summary()}`);
console.log(`${student3.lastName} (${student3.getAge()} років) → ${student3.summary()}`);