// for (let i = 0; i <= 100; i++) {
// console.log(i)
// }

// let i = 0 
// while (i <= 100) {
//     console.log(i)
//     i++
// } 

// let i = 0 
// do {
//     console.log(i)
//     i++
// } while(i <= 100)

// for (let i = 100; i >= 1; i--) {
// console.log(i)
// }

// let i = 100 
// while (i >= 1) {
//     console.log(i)
//     i--
// } 




// let i = 100
// do {
//     console.log(i)
//     i--
// } while(i >= 1)





// stworz program liczacy od 1 do 100 i wypisujacy czy dana liczba jest parzysta czy nie
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i%2 == 0) {
//         console.log('liczba jest parzysta')
//     }
//     else {
//         console.log('liczba jest nie parzysta')
//     }
    
// }






// uzyj przy tym petli for i switch
// let x = 5;
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     d = i % 2
//     switch(d) {
//         case 0:
//             console.log('liczba jest nie parzysta')
//             break
//         case 1:
//             console.log('liczba jest parzysta')
//             break
//     }
// };





// switch(x) {
//     case 3:
//         console.log('liczba to trzy');
//         break
//     case 1:
//         console.log('liczba to 1')
//         break
//     case 2:
//         console.log('liczba to 2')
//         break
//     default:
//         console.log('default')
//         break
// }




// stworz program ktory obliczy silnie z liczby zadanej przez uzytkownika
// let zakresOd = prompt('podaj liczbe od');
// let zakresDo = prompt('podaj liczbe do');

// let losowo = Math.random() * (zakresDo - zakresOd) + zakresOd;
// losowo = Math.floor(losowo);
// console.log(losowo);




// let napis = prompt('wbisz cos');

// for (let i = 0; i < napis.length; i++) {
//     console.log(napis.charAt(i))
// }



for (let i = 50; i <= 100; i++) {
    if (i%2 == 0) { 
        console.log(i)
        console.log('liczba parzysta')
    }
    else {
        console.log(i)
        console.log('liczba nie parzysta')
    }
}

// a = prompt('wpisz liczbe')

// if (a%2 == 0) {
//     console.log(a)
//     console.log('liczba parzysta')
// }
// else {
//     console.log(a)
//     console.log('liczba nie parzysta')
// }