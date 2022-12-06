function Student(name, gender, age) {
   return {
      name,
      gender,
      age,
      marks: {},
   };
}

Student.prototype.setSubject = function (subjectName) {
   return {
      subject: subjectName,
   };
};

Student.prototype.addMarks = function (...marks) {
   for (let value of marks) {
      this.marks.push(marks[value]);
   }
};

Student.prototype.getAverage = function () {
   for (let i of Student.marks) {
      if ("marks" in Student) {
         let sumMarks = sum(i);
         return sumMarks / marks.length;
      } else return 0;
   }
};

Student.prototype.exclude = function (reason) {
   delete Student.marks;
   delete Student.subject;
   Student.excluded = reason;
};
