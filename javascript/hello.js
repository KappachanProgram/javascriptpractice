var list = document.querySelectorAll('#list .my');

for(var i = 0;i < list.length;i++){
    console.log(list.item(i).href);
}

function btn_click(){
    window.alert('ボタンをクリックしました')
}

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener('click',function(){
        window.alert('ボタンをクリックしました');
    },false);
},false);

document.addEventListener('DOMContentLoaded',function(){
    var list = document.getElementById('list');
    var attrlist = list.attributes
    for(var item of attrlist){
        console.log(item.name + ":" + item.value);
    }

},false);

document.addEventListener('DOMContentLoaded',() => {
    getRadioValue = (name) => {
        result = "";
        var elems = document.getElementsByName(name);
        for(var elem of elems){
            if(elem.checked){
                result = elem.value;
                break;
            }
        }
        return result;
    }
    document.getElementById('btn2').addEventListener('click',() => {
        window.alert(getRadioValue('food'));        
    },false);
    
    elem = document.getElementById('mouse');
    elem.addEventListener('mouseover',() => {
        this.getElementById('mouse').className = 'h1';
    },false);

    elem.addEventListener('mouseout',() => {
        this.className ='';
    },false);
},false);

