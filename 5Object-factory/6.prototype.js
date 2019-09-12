/**
 * prototype 을 통해서 공통되는 메서드를 만들자
 * 여기서 핵심 prototype을 이용해서 메서드를 따로 분리해서 정의하고, 장점은 new라는 키워드로 객채를 생성할때마다 메모리 낭비도 줄이수가 있다.
 */

(function(){
    var Person = function(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }

    Person.prototype.sum = function(){
        return this.name+(this.first + this.second + this.third);
    }

    // 이 메서드 밑에서 부터는 간단하게 DOM script에 적용해보자.
    Person.prototype.none = function() {    // 엘리먼트 none하기
        this.name.style.display = 'none';   
    }
    Person.prototype.nonelist = function() {    // 엘리먼트들(복수) none하기
        for(var i = 0; i < this.name.length; i++){
            this.name[i].style.display = 'none';    
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