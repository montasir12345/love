const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const noBtn = document.querySelector(".no-btn");
//const yesBtn = document.querySelector(".no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener("mouseover", function(){
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});
 
function change_text(){
    document.getElementById("demo").innerHTML="Yes I Love You😘❤🥰💖"
}





