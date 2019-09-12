var memberArray = ['eging','graphittle','leezhace'];
console.log(memberArray[2]);

var memberObject = {
    manager: 'egoing',
    developer: 'graphittle',
    designer:'leezhce '
}
memberObject.designer = 'leezhch';
console.log(memberObject.designer);

delete memberObject.manager;
console.log('after delete manager:',memberObject.manager);

