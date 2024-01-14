document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});

var taglist=[
    {
        "TagName": "2023",
        "background": "cornflowerblue",
        "color": "white"
    }
]
var all_tag=document.getElementsByClassName("md-tag");
for(var i=0;i<all_tag.length;i++){
    var flag=true;
    for(var j=0;j<taglist.length;j++){
        if(all_tag[i].innerText==taglist[j]["TagName"]){
            all_tag[i].style.background=taglist[j]["background"];
            all_tag[i].style.color=taglist[j]["color"];
            flag=false;
            break;
        }
    }
    if(flag){
        all_tag[i].style.background="cornflowerblue";
        all_tag[i].style.color="white";
    }
}