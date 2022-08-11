function loveCalculator (man, women){
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1;
    console.log(`The love match between ${man} and ${women} is ${n}`);
}

loveCalculator('André', 'Gabriela');
