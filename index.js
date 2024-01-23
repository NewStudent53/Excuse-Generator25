window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#the-excuse').innerHTML = excuseGen();
    });
    console.log('Hello Rigo from the console!');
};

let excuseGen = () => {
    let pronoun = ['A', 'The'];
    let subject = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pincone'];
    let action = ['took my', 'threw my', 'yelled at my', 'stole my', 'bit my'];
    let object = ['homework', 'toe', 'car', 'shoe'];
    let where = ['on the streets', 'in my house', 'in my driveway'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let objectIndx = Math.floor(Math.random() * object.length);
    let whereIndx = Math.floor(Math.random() * where.length);

    return pronoun[proIndx] + ' ' + subject[subjIndx] + ' ' + action[actionIndx] + ' ' + object[objectIndx] + ' ' + where[whereIndx];
};
