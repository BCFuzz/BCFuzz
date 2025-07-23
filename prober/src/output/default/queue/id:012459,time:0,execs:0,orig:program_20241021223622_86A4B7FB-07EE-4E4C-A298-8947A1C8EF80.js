function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new Uint8Array(this, F0, this);
    function f4() {
        return F0;
    }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f11(a12, a13, a14) {
        Object.defineProperty(arguments, 2, { enumerable: true, get: f4 });
        return f4;
    }
    f11(F5);
}
new F0();
gc();
