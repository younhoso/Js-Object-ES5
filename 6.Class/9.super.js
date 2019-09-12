/**
 * super는 부모 class가 가지고 있는 모든 변수를 자식이 상속 받을수 있다. 
 * super.sum()는 부모클래스에 메서드를 호출하므로서 재사용하는것
 *
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

        nonelist(){  // 엘리먼트들(복수) none하기
            for(var i = 0; i < this.name.length; i++){
                this.name[i].style.display = 'none';    
            }
        }
    }

    //extends(확장하다.)를 통해서 부모 class가 가지고 있는 모든 변수, 메서드 등등을 자식 class에 상속 받을수 있다. 
    class PersonPlus extends Person{ 
        constructor(name, first, second, third, test) {
            super(name, first, second, third);  //super()는 부모클래스에 생성자를 뜻한다.
            this.tset = test;
        }
        sum() { //클래스 내부에 있는 공통메서드 
            return super.sum() + this.tset;  //super.sum()는 부모클래스에 메서드를 호출하므로서 재사용하는것
        }
        avg(){
            return (this.first + this.second) / 2;
        }
    }

    var tesst = new Person('so',10,20,30);
    var personplus = new PersonPlus('sosos',30,20,30);
    console.log('sum :', personplus.sum());

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