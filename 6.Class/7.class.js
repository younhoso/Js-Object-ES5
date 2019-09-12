/**
 * class를 사용하는 문법으로 다시 작성해보자
 * class내부에서 constructor 를 사용할수있다.
 * class를 사용하면 prototype를 사용할 필요 없이 class내부에 메서드를 정의할수 있다.
 */

(function(){
    class Person{
        constructor(name, first, second, third) { //constructor은 객체가 생성될때 자동으로 실행이 되도록 약속되어 있는 함수
            this.name = name;
            this.first = first;
            this.second = second;
            this.third = third;
        }

        sum() {
            return this.first + this.second;
        }

         // 이 메서드 밑에서 부터는 간단하게 DOM script에 적용해보자.
        none() {    // 엘리먼트 none하기
            this.name.style.display = 'none';
        }

        nonelist(){      // 엘리먼트들(복수) none하기
            for(var i = 0; i < this.name.length; i++){
                this.name[i].style.display = 'none';    
            }
        }
    }
    var tesst = new Person('so',10,20,30);
    /**
    tesst변수를 가리키는 sum이라는 메서드만큼은 다르게 동작하게 하고 싶다면 
    다음과 같이 작성하면된다.
     */
    tesst.sum = function(){ 
        return 'this :'+(this.first + this.second + this.third);
    }
    var tesst2 = new Person('lee',50,20,30);
    console.log(tesst.sum());
    console.log(tesst2.sum());


    var h3Ele = document.querySelector('h3'); //엘리먼트 선택
    var listEle = document.querySelectorAll('ul .list'); //엘리먼트들(복수) 선택
    
    var h3 = new Person(h3Ele);
    var listnone = new Person(listEle);
    
    h3.none();
    listnone.nonelist();
})()