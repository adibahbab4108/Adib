let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
function openTab(tabname) {
    for (let tablink of tabLinks) {
        tablink.classList.remove('active-link');//remove active link bar
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab')//remove active tab content
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
// ............Gsap code............

gsap.from(".container", {
    y: 200,
    rotation:360,
    duration: 1,
    // scrollTrigger: {
    //     trigger:".container",
    //     start: "top 10%",
    //     end:"top 30%",
    //     toggleActions:"restart reverse none none",
    //     markers: {
    //         startColor:"white",
    //         endColor:"red",
    //         fontSize:"30px",
    //         indent:100
    //     },
        scrub:2
    // }
})
