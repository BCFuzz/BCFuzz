for (let v0 = 0; v0 < 5; v0++) {
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = new Float32Array();
        class C10 {
            constructor(a12, a13, a14) {
                a14 in v9;
            }
        }
        const v16 = new C10(v0, a4, this);
        const t10 = v16.constructor;
        new t10("toString", F2, "toString");
    }
    new F2();
}
gc();
