function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        for (let v7 = 0; v7 < 5; v7++) {
            const v8 = [4294967296,7,-4294967296,-1,268435439,16,536870887,2147483649,9007199254740992];
            v8.__proto__ = [2147483647,6,127,0,-9223372036854775807,0,-9223372036854775807];
            try {
            const t0 = 127;
            t0(...v8, BigInt64Array, ...v8);
            } catch (e) {}
            const v15 = new Int32Array(255);
            for (const v16 in v15) {
            }
        }
    }
}
new C1(C1, f0, C1, C1);
new C1();
gc();
