for (let v0 = 0; v0 < 5; v0++) {
    const v2 = -1000000000.0 >>> -1000000000.0;
    const v3 = v2 - v2;
    class C4 {
    }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        C4[1] -= v3;
    }
    const t9 = F5.prototype.constructor;
    new t9();
    new F5();
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
}
gc();
