// Проверка типа
let sum: any;
sum = 1200;
if (typeof sum === "number") { let result: number = sum / 12; }
else { console.log("invalid operation"); }

// Псевдонимы типов
type stringOrNumberType = number | string; //TypeScript позволяет определять псевдонимы типов с помощью ключевого слова type:
let sum: stringOrNumberType = 36.6;
if (typeof sum === "number") {
    console.log(sum / 6);
}