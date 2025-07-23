function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = new Date();
        v6.getUTCMinutes();
        v6.getUTCMinutes();
    }
    new F3();
}
new F0();
gc();
