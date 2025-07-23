class C0 {
    constructor(a2, a3, a4, a5) {
        function f6(a7, a8, a9) {
            for (let v10 = 0; v10 < 50; v10++) {
            }
            const o13 = {
                "maxByteLength": 268435439,
            };
            const v15 = new SharedArrayBuffer(1000, o13);
            const v17 = new BigUint64Array(v15);
            const v19 = new Uint32Array(a3, a5);
            try { v19.toSorted(); } catch (e) {}
            v17.byteLength;
            return a3;
        }
        f6(a5, C0, a5);
        f6();
    }
}
const v24 = new C0();
new C0(C0, C0, v24, C0);
gc();
