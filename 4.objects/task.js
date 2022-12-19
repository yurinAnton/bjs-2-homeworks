function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

let student1 = new Student("Andrey", "мужской", 31);
let student2 = new Student("Svetlana", "женский", 25);
let student3 = new Student("Egor", "мужской", 18);

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
   if (this.marks) {
      this.marks.push(...marksToAdd);
   }
};

Student.prototype.getAverage = function () {
   if (this.marks) {
      let sum = this.marks.reduce((acc, item) => acc + item, 0);
      return parseFloat((sum / marks.length).toFixed(2));
   }
};

Student.prototype.exclude = function (reason) {
   delete this.marks;
   delete this.subject;
   this.excluded = reason;
};
