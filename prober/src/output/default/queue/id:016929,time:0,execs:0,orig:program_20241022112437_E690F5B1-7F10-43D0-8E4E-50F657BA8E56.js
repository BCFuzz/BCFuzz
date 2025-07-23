for (let v2 = 0; v2 < 10; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        ("m").replace("p", "m");
    }
    new F3();
}
gc();
