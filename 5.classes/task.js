class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
      const currentDate = new Date().getFullYear();
      let stateCount = currentDate - releaseDate;

      this.fix = function () {
         return (stateCount = this.state * 1.5);
      };
   }

   set state(stateCount) {
      if (stateCount < 0) {
         this.state = 0;
      } else if (stateCount > 100) {
         this.state = 100;
      } else {
         this.state = stateCount;
      }
   }

   get state() {
      return this.state;
   }
}

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name);
      super(releaseDate);
      super(pagesCount);
      super(state);
      super(name);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name);
      super(releaseDate);
      super(pagesCount);
      super(state);
      super(name);
      this.author = author;
      this.type = "book";
   }
}

class NovelBook extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name);
      super(releaseDate);
      super(pagesCount);
      super(state);
      super(name);
      this.type = "novel";
   }
}
class FantasticBook extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name);
      super(releaseDate);
      super(pagesCount);
      super(state);
      super(name);
      this.type = "fantastic";
   }
}
class DetectiveBook extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name);
      super(releaseDate);
      super(pagesCount);
      super(state);
      super(name);
      this.type = "detective";
   }
}

// Ex. 2

class Library {
   constructor(name) {
      this.name = "";
      this.books = [];
   }

   addBook(book) {
      if (state >= 30) {
         this.books.push(book);
      }
   }

   findBookBy(type, value) {
      return this.books.find((book) => book[type] === value);
   }

   giveBookByName(bookName) {
      const giveBook = this.books.findBookBy("name", bookName);
      if (giveBook) {
         const indexBook = this.books.indexOf(giveBook);
         this.books.splice(indexBook, 1);
         return giveBook;
      }
   }
}

// Ex. 3

// class classNote {
//    constructor(subject, mark) {
//       this.subject = "";
//       //   this.marks = {
//       //      физика: [],
//       //      химия: [],
//       //      литература: [],
//       //      ифнорматика: [],
//       //   };

//       let addMark = function (subject, mark) {
//          if (mark > 1 && mark < 6) {
//             this.marks.push(mark);
//          } else return false;
//       };
//    }
// }
