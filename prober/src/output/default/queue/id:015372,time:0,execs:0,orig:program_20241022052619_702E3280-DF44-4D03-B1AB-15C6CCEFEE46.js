class C1 {
    constructor(a3) {
        const v5 = BigInt64Array.of();
        const v8 = new Uint8Array(153);
        for (let i = 0; i < 5; i++) {
            const v11 = new WeakMap(v5);
            const v12 = v11.set(v11);
            try { v12.set(-1024n, Float64Array); } catch (e) {}
            for (const v14 in v8) {
            }
        }
    }
}
new C1(Float64Array);
const v16 = new C1(C1);
const t15 = v16.constructor;
new t15();
gc();
