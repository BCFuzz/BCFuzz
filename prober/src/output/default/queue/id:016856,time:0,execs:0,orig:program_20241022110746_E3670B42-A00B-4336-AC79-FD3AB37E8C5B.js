for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let v10 = 0; v10 < 500; v10++) {
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        const v19 = new Float32Array(this, v10, a17);
        class C20 {
            constructor(a22, a23, a24) {
                a24 in v19;
            }
        }
        const v26 = new C20();
        const t12 = v26.constructor;
        new t12("toString", F12, "toString");
    }
    new F12();
}
gc();
