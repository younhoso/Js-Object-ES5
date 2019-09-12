/**
 * this의 계념과, DOM script에 대한 계념 입니다.
 */

var My = {
    h3 : document.querySelector('h3'),
    list : document.querySelectorAll('ul .list'),
    
    none: function() {
        this.h3.style.display = 'none';
        for(var i = 0; i < this.list.length; i++){
            this.list[i].style.display = 'none';
        }
        
    },
    block: function() {
        this.h3.style.display = 'block';
    }
}

My.none();




