
let gameend=0;

let bird=document.querySelector(".bird");
let pos=bird.getBoundingClientRect().y;

let blocks=document.querySelectorAll(".block");
blocks.forEach(block=>{
    block.addEventListener("animationend",()=>{
        block.style.display="none";
    })
});
let prevblock=0;

setInterval(()=>{
    if(gameend==0){
    let num=Math.floor(Math.random()*3+1);
    while(num==prevblock)
    {
        num=Math.floor(Math.random()*3+1);
        console.log(prevblock);
    }
    prevblock=num;
    let currblocks=document.querySelectorAll(`.block${num}`);
    currblocks.forEach(block=>{
        block.style.display="block";
    });
    let topheight=Math.floor(Math.random()*80);
    while(topheight<40)
    {
        topheight=Math.floor(Math.random()*80);
    }
    let decider=Math.floor(Math.random()*2);
    let bottomheight=100-topheight-40;
    let topblock=document.querySelector(`.block${num}.topblock`);
    let bottomblock=document.querySelector(`.block${num}.bottomblock`);
    // console.log(document.querySelector(`.block${num}.topblock`));
    if(bottomheight<0||decider==0)
    {
        bottomheight=0;
    }
    topblock.style.height=`${topheight}%`;
    bottomblock.style.height=`${bottomheight}%`;
    console.log(bottomblock);
}
},3500);
bird.addEventListener("animationend",()=>{
    bird.style.top=`${pos-150}px`;
    bird.style.animation="drop 0.75s 1";
})
window.addEventListener("keypress",function(e){
    if(e.keyCode==32)
    {
        pos=bird.getBoundingClientRect().y;
        bird.style.top=`${pos}px`;
        bird.style.animation="";
        bird.style.animation="fly 0.25s 1";
    }
});
let score=0;
let strscore="";
setInterval(()=>{
    if(gameend==0){
    score++;
    let scoring=document.querySelector(".score p");
    strscore=score.toString();
    while(strscore.length<6)
    {
        strscore="0"+strscore;
    }
    scoring.textContent=strscore;
   
    }
},100)
setInterval(()=>{
    if(gameend==0){
        box=bird.getBoundingClientRect();
        if(box.bottom>=100*window.innerHeight/100)
        {
            document.querySelector(".playagain").style.opacity=1;
            resetbutton.style.pointerEvents="all";
            resetbutton.style.display="block";
            let elements=document.querySelectorAll(".background-pic", ".bird");
            elements.forEach(element=>{
             // console.log(element);
                let pos=element.getBoundingClientRect();
                element.style.top=`${pos.top}px`;
                element.style.left=`${pos.left}px`;
                element.style.animation="0";
                gameend=1;
                score=0;
                console.log(1);
            });
            let blocks=document.querySelectorAll(".block");
            blocks.forEach(element=>{
             // console.log(element);
                let pos=element.getBoundingClientRect();
                element.style.left=`${pos.left}px`;
                element.style.animation="0";
                gameend=1;
                score=0;
            });
        }
        let topblocks=document.querySelectorAll(".topblock");
        let bottomblocks=document.querySelectorAll(".bottomblock");
              topblocks.forEach(topblock=>{
            let block=topblock.getBoundingClientRect();
            if(box.top<=block.bottom&&box.right>=block.left&&box.right<=block.right)
            {
               document.querySelector(".playagain").style.opacity=1;
               resetbutton.style.pointerEvents="all";
               resetbutton.style.display="block";
               let elements=document.querySelectorAll(".background-pic", ".bird");
               elements.forEach(element=>{
                // console.log(element);
                   let pos=element.getBoundingClientRect();
                   element.style.top=`${pos.top}px`;
                   element.style.left=`${pos.left}px`;
                   element.style.animation="0";
                   gameend=1;
                   score=0;
               });
               let blocks=document.querySelectorAll(".block");
               blocks.forEach(element=>{
                // console.log(element);
                   let pos=element.getBoundingClientRect();
                   element.style.left=`${pos.left}px`;
                   element.style.animation="0";
                   gameend=1;
                   score=0;
               });
               console.log(2);
            } 
        });
        bottomblocks.forEach(bottomblock=>{
            let block=bottomblock.getBoundingClientRect();
            if(box.bottom>=block.top&&box.right>=block.left&&box.right<=block.right)
            {
               document.querySelector(".playagain").style.opacity=1;
               resetbutton.style.pointerEvents="all";
               resetbutton.style.display="block";
               let elements=document.querySelectorAll(".background-pic", ".bird");
               elements.forEach(element=>{
                // console.log(element);
                   let pos=element.getBoundingClientRect();
                   element.style.top=`${pos.top}px`;
                   element.style.left=`${pos.left}px`;
                   element.style.animation="0";
                   gameend=1;
                   score=0;
               });
               let blocks=document.querySelectorAll(".block");
               blocks.forEach(element=>{
                // console.log(element);
                   let pos=element.getBoundingClientRect();
                   element.style.left=`${pos.left}px`;
                   element.style.animation="0";
                   gameend=1;
                   score=0;
                   console.log(3);
               });
            } 
        });
    
    }
},1);
let resetbutton=document.querySelector(".playagain");
resetbutton.addEventListener("click",()=>{
    console.log(1);
    document.querySelector(".score p").textContent="000000";
    let bgpics=document.querySelectorAll(".background-pic");
    bgpics.forEach(bgpic=>{
        // console.log(bgpic);
        bgpic.style.animation="";
    });
    bird.style.top="45%";
    bird.style.left="45%";
    bird.style.animation="";
    document.querySelectorAll(".block1").forEach(block=>{
        block.style.display="none";
        block.style.left="120%";
        block.style.animation="";
    });
    document.querySelectorAll(".block2").forEach(block=>{
        block.style.display="none";
        block.style.left="180%";
        block.style.animation="";
    });
    document.querySelectorAll(".block3").forEach(block=>{
        block.style.display="none";
        block.style.left="200%";
        block.style.animation="";
    });
    gameend=0;
    resetbutton.style.display="none";
});