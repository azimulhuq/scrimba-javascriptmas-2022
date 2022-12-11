// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    const minNum = 1;
    const maxNum = 10;
    const randomNum = Math.floor(Math.random() * maxNum) + minNum;
    const myTacos = new Array(randomNum).fill('🌮');

    return myTacos;
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('');
}

document.getElementById('tray').innerHTML = putTacosOnTray();
