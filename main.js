/* #1 створити масив з: з 5 числових значень; з 5 стічкових значень; з 5 значень стрічкового, числового та булевого типу; та вивести його в консоль */
/* const str = ['hello', 'world', 'how', 'are', 'you'];
const num = [1, 366, -71, 3.145, -0.332];
const mix = ['javascript is awesome', 753272187, true, [12, 'one'], false];
console.log(str, num, mix); */

/* #2 Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */
/* const ar = [];
ar[0] = 'My';
ar[1] = 'name';
ar[2] = 'is';
ar[3] = 'Nataliia';
console.log(ar); */

/* #3  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині */
/* for (let i = 0; i < 10; i++) {
    document.write(`<div>Блок div</div>`);
} */

/* #4 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */
/* for (let i = 0; i < 10; i++) {
    document.write(`<div>Блок div ${i}</div>`);
} */

/* #5 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. */
/* let i = 0;
while (i < 20) {
    document.write(`<h1>Заголовок h1</h1>`);
    i++;
} */

/* #6 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. */
/* let i = 0;
while (i < 20) {
    document.write(`<h1>Заголовок h1 ${i}</h1>`);
    i++;
} */

/* #7 Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. */
/* const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numI of num) {
    console.log(numI);
} */

/* #8 Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. */
/* const str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (const strI of str) {
    console.log(strI);
} */

/* #9 Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. */
/* const mix = ['a', 12, true, ['ddd', 72, false], 'e', 'f', -868, false, 'i', 0.77];
for (const mixI of mix) {
    console.log(mixI);
} */

/* #10 Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи */
/* const mix = ['a', 12, true, 'ddd', false, 'f', -868, false, 'i', 0.77];
for (let i = 0; i < mix.length; i++) {
    if (typeof(mix[i]) === 'boolean') {
        console.log(mix[i]);
    }
} */

/* #11 Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи */
/* const mix = ['a', 12, true, 'ddd', false, 'f', -868, false, 'i', 0.77];
for (let i = 0; i < mix.length; i++) {
    if (typeof(mix[i]) === 'number') {
        console.log(mix[i]);
    }
} */

/* #12 Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи */
/* const mix = ['a', 12, true, 'ddd', false, 'f', -868, false, 'i', 0.77];
for (let i = 0; i < mix.length; i++) {
    if (typeof(mix[i]) === 'string') {
        console.log(mix[i]);
    }
} */

/* #13 Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі. */
/* const arr = [];
arr[0] = 'a';
arr[1] = 123;
arr[2] = 'bb';
arr[3] = true;
arr[4] = ['d', 27, 'g'];
arr[5] = 'hello';
arr[6] = 'bye';
arr[7] = -7362.2;
arr[8] = false;
arr[9] = 653;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* #14 Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
/* for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + '<br>');
} */

/* #15 Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
/* for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i + '<br>');
} */

/* #16 Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */
/* for (let i = 0; i < 100; i = i + 2) {
    console.log(i);
    document.write(i + '<br>');
} */

/* #17 Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write */
/* for (let i = 0; i < 100; i = i + 2) {
    console.log(i);
    document.write(i + '<br>');
} */

/* #18 Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write */
/* for (let i = 1; i < 100; i = i + 2) {
    console.log(i);
    document.write(i + '<br>');
} */

/* #19 Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди) */
/* for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        console.log(`${i}:${j}`);
    }
} */

/* #20 Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди) */
/* for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        for (let y = 0; y < 60; y++) {
            document.write(`${i}:${j}:${y} <br>`);
        }
    }
}
for (let i = 2; i < 3; i++) {
    for (let j = 0; j < 20; j++) {
        for (let y = 0; y < 60; y++) {
            document.write(`${i}:${j}:${y} <br>`);
        }
    }
} */