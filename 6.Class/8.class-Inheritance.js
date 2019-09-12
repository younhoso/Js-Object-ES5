/**
 * class상속 언제 사용하는가?
 * class상속은 보통 기능을 커스텀 마이징 할때 사용한다. 
 * 즉 다시말해서 내가 jquery 라이브러리를 가져다가 사용할때 메서드 기능이 부족하다고 느껴서 메서드를 추가(커스텀 마이징)하고 싶은 상황이라면
 * 기존에 있던 class는 냅두고, 내가 추가로 class를 상속할때 사용하는것이다.
 * 
 * 물론 class를 그냥 추가하면 된다. 하지만 그렇게되면 jquery가 버전업이 되었었고, 최신버전을 가져다 사용할때 내가 짠코드를 덮어씌우기 한다거나, 
 * 내가 수정한게 있기때문에 업데이트를 못하거나 하는 상황이 생길수도 있다.
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

    class PersonPlus extends Person{
        avg(){
            return (this.first + this.second) / 2;
        }
    }

    var tesst = new Person('so',10,20,30);
    var personplus = new PersonPlus('sosos',30,20,30);
    console.log('sum :', personplus.sum());
    console.log('avg :', personplus.avg());
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