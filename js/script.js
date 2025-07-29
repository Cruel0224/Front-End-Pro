'use strict';

// Declare the Student class.
class Student {
    constructor(firstName, lastName, birthYear, grades = []) {

        // Initialize basic properties.
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;

        // Array for attendance — 25 classes, initially all null (not filled).
        this.attendance = new Array(25).fill(null);

        // Internal counter to know where to write the next value.
        this._attendanceIndex = 0;
    }

    // Method for calculating age.
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    // Method for calculating the average score.
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return Math.round(sum / this.grades.length);
    }

    // Mark that the student was present at the class.
    present() {
        if (this._attendanceIndex >= 25) return; // Do not write more than 25 values.
        this.attendance[this._attendanceIndex++] = true;
    }

    // Mark that the student was absent.
    absent() {
        if (this._attendanceIndex >= 25) return; // Do not write more than 25 values.
        this.attendance[this._attendanceIndex++] = false;
    }

    /// Method that returns the student's final score.
    summary() {
        const avgGrade = this.getAverageGrade();
        const marked = this.attendance.filter(a => a !== null);
        const presentCount = marked.filter(a => a === true).length;
        const attendanceRate = marked.length === 0 ? 0 : presentCount / marked.length;
        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
// === Student 1: has high grades and good attendance ===
const student1 = new Student("Марія", "Іваненко", 2005, [95, 91, 97]);

// Mark 3 presences.
student1.present();
student1.present();
student1.present();

// Output the data.
console.log("=== Студент 1 ===");
console.log("Ім'я:", student1.firstName);
console.log("Вік:", student1.getAge());
console.log("Середній бал:", student1.getAverageGrade());
console.log("Висновок:", student1.summary());


// === Student 2: has average grades but good attendance ===
const student2 = new Student("Олег", "Петренко", 2004, [80, 78, 85]);

// Mark 4 presences.
student2.present();
student2.present();
student2.present();
student2.present();

console.log("\n=== Студент 2 ===");
console.log("Ім'я:", student2.firstName);
console.log("Вік:", student2.getAge());
console.log("Середній бал:", student2.getAverageGrade());
console.log("Висновок:", student2.summary());


// === Student 3: has low grades and poor attendance ===
const student3 = new Student("Ірина", "Сидорова", 2003, [60, 65, 70]);

// 1 presence, 2 absence.
student3.absent();
student3.present();
student3.absent();

console.log("\n=== Студент 3 ===");
console.log("Ім'я:", student3.firstName);
console.log("Вік:", student3.getAge());
console.log("Середній бал:", student3.getAverageGrade());
console.log("Висновок:", student3.summary());
