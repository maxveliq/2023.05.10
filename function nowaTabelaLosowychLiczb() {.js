function nowaTabelaLosowychLiczb() {
    let tablica = [];
    let iloscLiczb = prompt('podaj ilosc liczb do wylosowania');
    for (i = 0; i < iloscLiczb; i++) {
        let wylosowanaLiczba = Math.random() * 101;
        wylosowanaLiczba = Math.floor(wylosowanaLiczba);
        tablica.push(wylosowanaLiczba);
        if (wylosowanaLiczba >=50) {
            console.log(wylosowanaLiczba)
            console.log('liczba jest wienksza od 50')
        }
        else {
            console.log(wylosowanaLiczba)
            console.log('liczba jest mniejsza od 50')
        }
    }
    return tablica
}