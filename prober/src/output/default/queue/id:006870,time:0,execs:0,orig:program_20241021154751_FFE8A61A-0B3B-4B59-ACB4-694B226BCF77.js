class C0 {
    constructor(a2, a3, a4, a5) {
        function f6(a7, a8, a9) {
            for (let v10 = 0; v10 < 5; v10++) {
            }
            const o13 = {
                "maxByteLength": 268435439,
            };
            const v15 = new SharedArrayBuffer(1000, o13);
            const v17 = new BigUint64Array(v15);
            v17.byteLength;
            return C0;
        }
        const v19 = f6(C0, a2, a4);
        const v20 = f6(f6, a3, a3);
        f6(v19, v20, v20);
    }
}
const v22 = new C0(C0, C0, C0, C0);
const v23 = new C0();
new C0(C0, v22, v22, v23);
gc();
