function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
const v7 = new F2();
for (let v8 = 0; v8 < 5; v8++) {
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        -a13;
    }
    const v15 = new F9(F2, v6, F9);
    const t11 = v15.constructor;
    new t11(v7);
    const v18 = v15.constructor;
    new v18(v18, v18, 4096);
    const v20 = new v18();
    const t16 = v20.constructor;
    new t16(v6, 1000000.0, v7);
}
gc();
