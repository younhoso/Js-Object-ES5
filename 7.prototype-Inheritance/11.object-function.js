var kim = {name: 'kim', first: 10, second: 20};
var lee = {name: 'lee', first: 10, second: 10};
var sum = function(prefix) {
    //this = kim;
    return prefix+(this.first + this.second);
}
// sum();
console.log(sum.call(kim, '=>'));  //call에 인자로 kim을 주면 sum함수에는 내부적으로 this = kim;와 같은것이다.
console.log(sum.call(lee, ':'));
var kimSum = sum.bind(kim, '->');
console.log('kimSum()', kimSum());