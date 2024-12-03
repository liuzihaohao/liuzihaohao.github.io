document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});

var taglist=[]
const xhr = new XMLHttpRequest();
xhr.open("GET", "/tag.json", false);
try {
  xhr.send();
  if (xhr.status === 200) {
    taglist = JSON.parse(xhr.responseText);
  } else {
    console.error(`ERROR: ${xhr.status}`);
  }
} catch (error) {
  console.error("ERROR: ", error);
}


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