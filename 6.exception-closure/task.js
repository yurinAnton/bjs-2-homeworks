function parseCount(value) {
   result = Number.parseFloat(value);
   if (isNaN(result)) {
      throw new Error("Невалидное значение");
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
      if (a + b <= c || a + c <= b || b + c <= a) {
         throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
   }

   get perimeter() {
      return this.a + this.b + this.c;
   }

   get area() {
      const halfPer = (1 / 2) * (this.a + this.b + this.c);
      return Number(
         Math.sqrt(
            halfPer *
               (halfPer - this.a) *
               (halfPer - this.b) *
               (halfPer - this.c)
         ).toFixed(3)
      );
   }
}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (error) {
      return {
         get perimeter() {
            return "Ошибка! Треугольник не существует";
         },
         get area() {
            return "Ошибка! Треугольник не существует";
         },
      };
   }
}
