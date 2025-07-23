function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        for (let v7 = 0; v7 < 5; v7++) {
            const v8 = [4294967296,7,-4294967296,-1,268435439,16,536870887,2147483649,9007199254740992];
            try {
            const t0 = 127;
            t0(...v8, BigInt64Array);
            } catch (e) {}
            const v14 = new Int32Array(255);
            for (const v15 in v14) {
            }
        }
    }
}
new C1(C1, f0, C1, f0);
new C1();
gc();
