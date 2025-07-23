class C1 {
    constructor(a3, a4) {
        const o7 = {
            "maxByteLength": 1000,
        };
        const v9 = new SharedArrayBuffer(7, o7);
        const v11 = new Int16Array(v9);
        v11.set(a3);
    }
}
new C1(0);
gc();
