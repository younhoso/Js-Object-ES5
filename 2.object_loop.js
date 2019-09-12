var memberArray = ['eging','graphittle','leezhace'];

for(var name in memberArray){
    console.log( name, memberArray[name] );     //( 주의 for in문에서는 객체 또는 배열의 원에소 접근할땨는 .점으로는 접근못하고,[]대가로로 가능하다. )
}

var memberObject = {
    manager: 'egoing',
    developer: 'graphittle',
    designer:'leezhce'
}
for(var name in memberObject){
    console.log( name, memberObject[name] );    //( 주의 for in문에서는 객체 또는 배열의 원에소 접근할땨는 .점으로는 접근못하고,[]대가로로 가능하다. )
}