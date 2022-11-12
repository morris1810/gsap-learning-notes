window.addEventListener("load", function() {


    const jd1 = this.document.getElementById('jd1');


/*

            <div id="ld1" style="z-index: 4;" class="leftDoor">
                <img src="assets/img/door/d1.png" alt="">
            </div>
            <div id="rd1" style="z-index: 3;" class="rightDoor">
                <img src="assets/img/door/d2.png" alt="">
            </div>
*/
    var doorAmount = 9;
    for (let i = 0; i < doorAmount; i++) {
        const leftDoor = this.document.createElement("div");
        const rightDoor = this.document.createElement("div");
        const leftDoorStyle = document.createElement("img");
        const rightDoorStyle = document.createElement("img");

        leftDoor.classList.add("leftDoor");
        rightDoor.classList.add("rightDoor");
        leftDoor.id = `ld${i+1}`;
        rightDoor.id = `rd${i+1}`;

        leftDoor.style.zIndex = `${doorAmount*2 - (i*2)}`
        rightDoor.style.zIndex = `${doorAmount*2 - (i*2)-1}`

        leftDoorStyle.src = `assets/img/door/d${((i+1)*2)-1}.png`
        rightDoorStyle.src = `assets/img/door/d${((i+1)*2)}.png`

        leftDoor.appendChild(leftDoorStyle);
        rightDoor.appendChild(rightDoorStyle);

        
        jd1.appendChild(leftDoor);
        jd1.appendChild(rightDoor);

    }

    console.log(jd1);


    const leftDoorList = this.document.querySelectorAll('.leftDoor');
    const rightDoorList = this.document.querySelectorAll('.rightDoor');
    
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        defaults: {
            rotate: 30, 
            scale: 3, 
            stagger: 1, 
            duration: 1, 
            ease: "power1.inOut"
        },
        scrollTrigger: {
            trigger: "#jd1",
            scrub: true,
            start: "top top",
            end: "+=16000vh", 
            pin: true, 
            // markers: true, 
          },
        onComplete: () => {this.window.scrollTo(0, 0)}
    })

    tl.to(leftDoorList, {xPercent: -250})
    .to(rightDoorList, {xPercent: 250}, "<")
    .to("#jd1", {
        rotate: 360,
        scale: 1, 
        stagger: 1, 
        duration: 9,  
        ease: "power1.inOut"
    }, "<")

    // tl
    // .to("#ld1", {xPercent: -260})
    // .to('#rd1', {xPercent: 260}, "<")
    // .to("#ld2", {xPercent: -260})
    // .to('#rd2', {xPercent: 260}, "<")
})