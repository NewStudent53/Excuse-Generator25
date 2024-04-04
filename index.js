function excuseGen() {

    var who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    var action = ['ate', 'peed', 'crushed', 'broke'];
    var what = ['my homework', 'my phone', 'the car'];
    var when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    var C1 = who[Math.round(Math.random()*(Character.length-1))];
    var C2 = action[Math.round(Math.random()*(Action.length-1))];
    var C3 = what[Math.round(Math.random()*(Object.length-1))];
    var C4 = when[Math.round(Math.random()*(Object.length-1))];

    document.getElementById('TheExcuses').innerHTML = '<div>' C1 + ' ' + C2 + ' ' + C3 + ' ' + C4 '</div>'
}
