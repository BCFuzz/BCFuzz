class C4 {
    constructor(a6, a7, a8, a9) {
        const v10 = new Uint8Array(a9);
        try { v10.reduceRight(a7, a7); } catch (e) {}
    }
}
const v12 = new C4();
new C4(1000, -9007199254740991, v12, 4294967296);
gc();
