function Student(name, gender, age) {
   return {
      name,
      gender,
      age,
      marks: [],
   };
}

let student1 = new Student("Andrey", "мужской", 31);
let student2 = new Student("Svetlana", "женский", 25);
let student3 = new Student("Egor", "мужской", 18);

Student.prototype.setSubject = function (subjectName) {
   return {
      subject: subjectName,
   };
};

Student.prototype.addMarks = function (...marks) {
   if ("marks" in Student) {
      marks.map((marks) => Student.marks);
   }
};

Student.prototype.getAverage = function () {
   if ("marks" in Student) {
      marks.reduce((summ, mark, index, marks) => {
         if (index === marks.length - 1) {
            return summ / marks.length;
         }
      }, 0);
   }
   return 0;
};

Student.prototype.exclude = function (reason) {
   delete Student.marks;
   delete Student.subject;
   Student.excluded = reason;
};
