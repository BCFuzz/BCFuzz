class C1 {
    constructor(a3, a4, a5, a6) {
        const v7 = `
            const o10 = {
                "maxByteLength": 268435440,
            };
            const v12 = new SharedArrayBuffer(8, o10);
            new Uint8ClampedArray(v12);
        `;
        const v15 = eval(v7);
        v15[1] = v15;
    }
}
new C1();
new C1();
gc();
