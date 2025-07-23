function f0() {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    Uint8ClampedArray instanceof F2;
    let v5 = 44485;
    for (; v5--;) {
    }
    return f0;
}
f0();
gc();
