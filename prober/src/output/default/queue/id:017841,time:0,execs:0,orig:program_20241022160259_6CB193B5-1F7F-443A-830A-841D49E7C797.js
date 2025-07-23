function f6(a7, a8, a9) {
    const o13 = {
        get b() {
            const v11 = delete this[1073741823];
            let v12;
            try {
            const t0 = -536870912;
            v12 = new t0(1010073573, 1010073573, -1075661733, 0.0, v11);
            } catch (e) {}
            return v12;
        },
        "h": 0.8436925608209597,
        "g": a8,
        "b": -536870912,
        "d": a9,
        ...0.0,
        "a": 0.0,
    };
    return o13;
}
f6(-2.0, -2.0, -1075661733);
f6(0.0, -2.0, -1075661733);
new WeakSet();
for (let i20 = 0, i21 = 10; i21--, i20 < i21;) {
}
for (let v28 = 0; v28 < 500; v28++) {
    function F30(a32, a33, a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
        const v37 = new Float32Array(this, v28, a35);
        function f38() {
        }
        function f39(a40) {
        }
        Object.defineProperty(v37, "undefined", { get: f38, set: f39 });
        class C41 {
            constructor(a43, a44, a45) {
                a45 in v37;
            }
        }
        const v47 = new C41(v28, v28, v28);
        const t40 = v47.constructor;
        new t40("toString", F30, "toString");
    }
    new F30(F30, -536870912, -1075661733, F30);
}
gc();
