const v2 = new Uint8ClampedArray(1024);
for (const v3 in v2) {
}
gc();
v2.buffer = BigInt64Array;
class C7 {
    constructor(a9) {
        const v10 = this.constructor;
        try { new v10(); } catch (e) {}
        new BigInt64Array(103);
    }
}
new C7(1024);
gc();
