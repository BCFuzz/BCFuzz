function f0(a1, a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v7 = 0; v7 < 1000; v7++) {
        }
        for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
        }
        eval(a5);
    }
    new F3();
    return a2;
}
for (let v21 = 0; v21 < 5; v21++) {
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v26 = new F22();
    v26.constructor = f0;
    const t18 = v26.constructor;
    t18();
}
gc();
