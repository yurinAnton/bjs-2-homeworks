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

//  const sherlock = new PrintEditionItem(
//     "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//     2019,
//     1008
//  );
//  console.log(sherlock.releaseDate); //2019
//  console.log(sherlock.state); //100
//  sherlock.fix();
//  console.log(sherlock.state); //100

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

//  const picknick = new FantasticBook(
//     "Аркадий и Борис Стругацкие",
//     "Пикник на обочине",
//     1972,
//     168
//  );

//  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
//  picknick.state = 10;
//  console.log(picknick.state); //10
//  picknick.fix();
//  console.log(picknick.state); //15

// Ex. 2

class Library {
   constructor(name, book) {
      this.name = "";
      this.books = [];
      function addBook(book) {
         if (state > 30) {
            this.books.push(book);
         }
         return books;
      }
      let findBookBy = function (type, value) {
         this.type = value;
         for (let type of books) {
            if (type in books) {
               return this.type;
            } else return null;
         }
      };
      let giveBookByName = function (bookName) {
         for (let value of books) {
            if (value === bookName) {
               delete this.name;
               return this.book;
            } else return null;
         }
      };
   }
}

// Ex. 3

class classNote {
   constructor(subject, mark) {
      this.subject = "";
      //   this.marks = {
      //      физика: [],
      //      химия: [],
      //      литература: [],
      //      ифнорматика: [],
      //   };

      let addMark = function (subject, mark) {
         if (mark > 1 && mark < 6) {
            this.marks.push(mark);
         } else return false;
      };
   }
}
