for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        ([-5.0,-0.0,-372.82462369365055,0.18901264028490117,1000.0,-1.3930293069807949,-Infinity,-2.0,1000000000000.0])["toString"]();
        -Infinity;
    }
    new F1();
}
gc();
