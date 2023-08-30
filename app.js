let cursor = document.querySelector("#cursor")

document.addEventListener("mousemove",(dets)=>{
    cursor.style.top = `${dets.y}px`;
    cursor.style.left = `${dets.x}px`;
})

gsap.to("h1",{
    scale : 1.1,
    scrollTrigger :{
        trigger : "h1",
        scroller :"body",
        start : "top 40%",
        end : "bottm 10%",
        scrub : true,
    }
})

gsap.to(".one",{
    x : 100,
    scrollTrigger:{
        trigger : ".one",
        scroller : "body",
        start : "top 80%",
        end : "bottm 10%",
        scrub : true,
        // markers : true
    }
})


gsap.to(".two",{
    x : -100,
    scrollTrigger:{
        trigger : ".one",
        scroller : "body",
        start : "top 80%",
        end : "bottm 10%",
        scrub : true,
        // markers : true
    }
})


gsap.to(".three",{
    x : 100,
    scrollTrigger:{
        trigger : ".one",
        scroller : "body",
        start : "top 80%",
        end : "bottm 10%",
        scrub : true,
        // markers : true
    }
})

