var list = document.querySelectorAll('#list .my');

for(var i = 0;i < list.length;i++){
    console.log(list.item(i).href);
}

function btn_click(){
    window.alert('ボタンをクリックしました')
}

window.onload = function(){
    document.getElementById('btn').onclick = function(){
        window.alert('ボタンをクリックしました');
    };
};
