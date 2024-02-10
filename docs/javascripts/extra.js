document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});

var taglist=[
    {
        "TagName": "年度总结",
        "background": "#3ab74f",
        "color": "black"
    },
    {
        "TagName": "信息学",
        "background": "#673AB7",
        "color": "black"
    },
    {
        "TagName": "项目作品",
        "background": "#3a66b7",
        "color": "black"
    },
    {
        "TagName": "Arduino",
        "background": "#b73a3a",
        "color": "black"
    },
    {
        "TagName": "硬件开发",
        "background": "#b7b53a",
        "color": "black"
    },
    {
        "TagName": "运维",
        "background": "#b77d3a",
        "color": "black"
    },
    {
        "TagName": "化学",
        "background": "#b73a9c",
        "color": "black"
    },
    {
        "TagName": "学习-Old",
        "background": "aquamarine",
        "color": "black"
    },
    {
        "TagName": "小型编程练习",
        "background": "chartreuse",
        "color": "black"
    },
    {
        "TagName": "Python",
        "background": "darkorange",
        "color": "black"
    },
    {
        "TagName": "前端",
        "background": "lightsalmon",
        "color": "black"
    },
    {
        "TagName": "Django",
        "background": "sienna",
        "color": "black"
    },
    {
        "TagName": "回忆录-2023",
        "background": "chartreuse",
        "color": "black"
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