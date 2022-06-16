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
