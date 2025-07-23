for (let i2 = -1716696, i3 = 10; i2 < i3; i3--) {
}
class C11 {
    constructor(a13, a14) {
        for (let v15 = 0; v15 < 5; v15++) {
            function F16() {
                if (!new.target) { throw 'must be called with new'; }
                const v18 = new Uint32Array(this);
                const o21 = {
                    "maxByteLength": 16,
                };
                const v23 = new SharedArrayBuffer(1, o21);
                const v25 = new BigInt64Array(v23);
                const v26 = v25.sort();
                function f27(a28, a29) {
                    try { a29.constructor(F16, a28); } catch (e) {}
                    return a29.byteOffset;
                }
                v26.constructor = f27;
                const t19 = v26.constructor;
                t19(v18, v26);
            }
            new F16();
        }
        for (let i37 = -3, i38 = 10; i37 < i38; i38--) {
        }
    }
}
new C11();
new C11();
new C11(Uint32Array, Uint32Array);
gc();
