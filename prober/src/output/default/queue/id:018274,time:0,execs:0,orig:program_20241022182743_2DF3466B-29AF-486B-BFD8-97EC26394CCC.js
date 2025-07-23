function f0() {
    return f0;
}
class C2 {
    constructor(a4, a5, a6, a7) {
        Object.defineProperty(this, 2, { get: f0, set: f0 });
        const o13 = {
            ...C2,
            n(a10, a11, a12) {
                a10[10000] >>>= a6;
                return this;
            },
            "apply": f0,
            "call": f0,
            "construct": f0,
            "defineProperty": f0,
            "deleteProperty": f0,
        };
        const v14 = new BigInt64Array();
        v14.constructor = a6;
        const v17 = new Uint8ClampedArray(this, a4);
        v17[4] += 36.16147373292847;
    }
}
new C2();
gc();
