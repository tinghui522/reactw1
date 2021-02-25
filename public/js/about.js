function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new  new ScrollMagic.Scene({
        duration:'200%',
        triggerElement:'.aboutlyrics',
        triggerHook:0
    })
    .setPin('.aboutlyrics')
    //.addIndicators()
    .addTo(controller);
}
splitScroll();