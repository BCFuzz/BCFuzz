function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = this.__proto__;
    t2.g = a2;
}
new F0();
function f5() {
    function F7(a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v12 = new F7(F0, F7, "toString");
    return "toString" in v12;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f5);
gc();
