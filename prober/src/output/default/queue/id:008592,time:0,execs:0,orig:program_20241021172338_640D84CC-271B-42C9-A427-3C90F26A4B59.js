const v2 = new Uint32Array(128);
for (let v3 = 0; v3 < 5; v3++) {
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
            constructor(a11, a12) {
                v2[6] in arguments;
            }
        }
        new C9(a6);
    }
    const v17 = new F4(v3, v2, F4);
    const t12 = v17.constructor;
    new t12();
}
gc();
