class C1 {
    constructor(a3, a4) {
        const o7 = {
            "maxByteLength": 65535,
        };
        const v9 = new ArrayBuffer(19, o7);
        const v11 = new Float32Array(v9, a4, 3);
        v11[2];
    }
}
new C1();
gc();
