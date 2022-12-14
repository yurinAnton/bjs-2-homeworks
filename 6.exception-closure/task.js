function parseCount(value) {
   if (value === NaN) {
      throw "Не валидное значение!";
   } else return Number.parseFloat(value);
}

function validateCount(value, parseCount) {
   let parseResult = parseCount(value);
   try {
      parseResult === NaN;
   } catch {
      console.log("Value is not a number!");
   } finally {
      return parseResult;
   }
}

// Ex. 2

class Triangle {
   constructor(a, b, c) {
      if (a + b < c || a + c < b || b + c < a) {
         throw "Треугольник с такими сторонами не существует";
      }
   }

   get perimeter() {
      this.perimeter = a + b + c;
      return Math.floor(this.perimeter * 100) / 100;
   }
   get area() {
      this.area = Math.sqrt(
         perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)
      );
      return Math.floor(this.area * 100) / 100;
   }
}
