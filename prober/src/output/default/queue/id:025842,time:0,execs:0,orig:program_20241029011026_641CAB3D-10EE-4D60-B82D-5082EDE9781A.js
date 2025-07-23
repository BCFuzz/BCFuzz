class C2 {
    constructor(a4, a5) {
        const o8 = {
            "maxByteLength": 65535,
        };
        const v10 = new ArrayBuffer(19, o8);
        const v12 = new Float32Array(v10, a5, 3);
        v12[2] = 0.0;
    }
}
new C2(3, 0.0);
gc();
