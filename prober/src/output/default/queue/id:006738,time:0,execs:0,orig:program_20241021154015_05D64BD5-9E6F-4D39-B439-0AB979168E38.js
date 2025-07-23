class C0 {
    constructor(a2, a3) {
        for (let i = 0; i < 5; i++) {
            const v6 = new Uint8Array(209);
            const v10 = new Uint8ClampedArray(4001);
            const v11 = a3 / 1;
            v10.with(v11, v11);
            for (const v13 in v6) {
                for (const v15 in [-47246,6,-6,65537]) {
                    const v17 = new Float32Array(v6, 1, a2);
                    Reflect.deleteProperty(v17, "-13");
                }
            }
        }
    }
}
new C0();
gc();
