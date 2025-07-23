class C0 {
    constructor(a2, a3, a4, a5) {
        function f6(a7, a8, a9) {
            for (let v10 = 0; v10 < 1250; v10++) {
            }
            const o13 = {
                "maxByteLength": 268435439,
            };
            const v15 = new SharedArrayBuffer(1000, o13);
            const v17 = new BigUint64Array(v15);
            v17.byteLength;
            const o23 = {
                ...a9,
                4: a8,
                toString(a20, a21) {
                    a21 && a9;
                    return a5;
                },
            };
            return o23;
        }
        f6();
        f6(a3, a5, a4);
        f6();
    }
}
new C0();
new C0();
new C0();
gc();
