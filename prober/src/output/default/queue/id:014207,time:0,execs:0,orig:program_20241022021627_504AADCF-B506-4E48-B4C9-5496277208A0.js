function f1() {
    return 2885;
}
class C2 extends f1 {
    constructor(a4, a5, a6, a7) {
        super();
        for (let v8 = 0; v8 < 5; v8++) {
            const v9 = [4294967296,7,-4294967296,-1,268435439,16,536870887,2147483649,9007199254740992];
            try {
            const t0 = 127;
            t0(...v9);
            } catch (e) {}
            const v13 = new Int32Array(2885);
            for (const v14 in v13) {
            }
        }
    }
}
new C2(C2, f1, f1);
gc();
