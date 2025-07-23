class C0 {
    n(a2, a3) {
        const o6 = {
            "maxByteLength": 257,
        };
        const v8 = new ArrayBuffer(257, o6);
        const v10 = new Uint32Array(v8);
        return v10;
    }
}
const v11 = new C0();
const v12 = v11.n();
v12.toReversed(v12);
gc();
