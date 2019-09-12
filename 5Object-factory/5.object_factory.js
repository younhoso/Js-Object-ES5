/**
 * constructor 생성자 함수
 * 여기서 핵심 Person 생성자 함수를 만들고, new라는 키워드를 통해서 외부에서 재사용할수 있다.
 */

(function(){
    var Person = function(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;

        this.sum = function() {
            return this.first + this.second + this.third;
        },
        
        // 이 메서드 밑에서 부터는 간단하게 DOM script에 적용해보자.
        this.none = function() {                    // 엘리먼트 none하기
            this.name.style.display = 'none';
        },
        
        this.nonelist = function() {                // 엘리먼트들(복수) none하기
            for(var i = 0; i < this.name.length; i++){
                this.name[i].style.display = 'none';
            }
        }
    }
    var tesst = new Person('so',10,20,30);
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