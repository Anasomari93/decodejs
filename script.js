var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var select=document.getElementById("select");
text1.addEventListener("input",()=>{
    codes();
})
select.addEventListener("change",()=>{
    codes();
})
function codes(){
    if(select.value=="decode"){
        text2.value=atob(text1.value)

    }else{
        text2.value=btoa(text1.value)


    }
}