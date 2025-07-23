class C2 {
    constructor(a4, a5, a6, a7) {
        const v9 = new BigInt64Array();
        v9.constructor = a6;
        v9.slice(a6, a5);
    }
}
try { new C2(Array, "", ""); } catch (e) {}
gc();
