function parseCount(value) {
   result = Number.parseFloat(value);
   if (isNaN(result)) {
      throw new Error("Не валидное значение");
   }
   return result;
}

function validateCount(number) {
   try {
      return parseCount(number);
   } catch (error) {
      return error;
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
