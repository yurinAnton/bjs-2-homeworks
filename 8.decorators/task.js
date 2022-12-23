//Задача № 1
function cachingDecoratorNew(func) {
   let cache = {};
   return (...args) => {
      const hash = args.join(",");
      if (cache.length > 5) {
         cache.shift();
      }

      if (hash in cache) {
         console.log(`Из кеша: ${cache[hash]}`);
         return cache[hash];
      }
      const result = func(...args);
      console.log(`Вычисляем: ${cache[hash]}`);
      cache[hash] = result;
      return result;
   };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
   let timeoutId = null;
   const count = null;
   return function (...args) {
      if (timeoutId) {
         clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
         console.log(func(...args));
      }, delay);
   };
}
