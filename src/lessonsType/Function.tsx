export const FunctionTSX = () => {
  // функция принимает параметром тип number, возвращает тип string
  const fn1 = (num: number): string => {
    return String(num);
  };
  fn1(1);

  /* Функиции принимают на вход параметром callback.  */
  //   Здесь мы должны указать, что именно callback принимает параметром, если он есть. И что ожидаем на выходе

  const fn2 = (callback: (param: number) => string) => {
    return String(callback);
  };

  // то же, через псевдоним типа
  type MyCallback = (param: number) => string;

  const fn3 = (cb: MyCallback) => {
    return String(cb);
  };

  /* необязательный параметр это ? перед указанием типа */
  const fn4 = (cb?: MyCallback) => {
    // делаем проверку
    if (cb === undefined) {
      cb = String;
    }
    // return String(cb);
    cb(12);
  };

  /* параметры по умолчанию */
  function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
  }
  createPoint(10, 20);

  /* непредсказуемое число параметров */
  //   ...nums - с точки зрения JS это у нас массив, и типизируется соответствующим образом
  function fn5(...nums: number[]): string {
    return nums.join("_");
  }

  /* интерфейсы и параметры функций */
  interface Printable {
    label: string;
  }
  function printReport(obj: Printable): void {
    console.log(obj.label);
  }

  const drink = {
    label: "pepsi",
    price: 90,
  };
  const phone = {
    label: "Huawei P10",
    price: 11000,
  };

  printReport(drink);
  printReport(phone);

  /* Перегрузка функций */
  // Это, когда одна и та же функция может принимать и возвращать различные типы данных
  // Например: function pickCard(x: number | { suit: string; card: number }[]): { suit: string; card: number } | number {}
  //   Мы описываем её типы, и важен факт: количество аргументов не изменно. И второе, скольк вариантов у нас оформленно, столько и проверок внутри
  //   вар 1
  // function pickCard(x: number): { suit: string; card: number };
  // //   вар 2
  // function pickCard(x: { suit: string; card: number }[]): number;
  // function pickCard(x): any {
  //   // 1-ая проверка
  //   if (typeof x === "object") {
  //     let pickedCard = Math.floor(Math.random() * x.length);
  //     return pickedCard;
  //     //   2-ая проверка
  //   } else if (typeof x === "number") {
  //     return { suit: "", card: x % 13 };
  //   }
  // }
  // pickCard(7);
  // pickCard([{ suit: "adc", card: 5 }]);
  /**/
};
