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
   if (hasOwnProperty(marks)) {
      this.marks.push(...marksToAdd);
   }
};

Student.prototype.getAverage = function () {
   if (hasOwnProperty(marks)) {
      this.marks.reduce((summ, mark, index, marks) => {
         if (index === marks.length - 1) {
            summ = summ + mark;
         }
      }, 0);
      return summ / marks.length;
   }
   return 0;
};

Student.prototype.exclude = function (reason) {
   delete this.marks;
   delete this.subject;
   this.excluded = reason;
};
