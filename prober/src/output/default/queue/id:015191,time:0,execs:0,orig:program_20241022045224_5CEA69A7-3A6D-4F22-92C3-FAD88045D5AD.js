function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        for (let v7 = 0; v7 < 5; v7++) {
            const v8 = [4294967296,7,-4294967296,-1,268435439,16,536870887,2147483649,9007199254740992];
            const v10 = ([-0.0,4.0,1000000.0,6.382685773093087,-0.0,-848118.1546685159,205.9985736344754,-0.0,303.6244836649446]).__proto__;
            try {
            const t0 = 127;
            t0(...v8);
            } catch (e) {}
            new Uint8ClampedArray(v10);
            for (let i19 = 0, i20 = 10; i19 !== i20; i20--) {
            }
            const v27 = new Int32Array(255);
            for (const v28 in v27) {
            }
        }
    }
}
new C1(C1, f0, f0, f0);
gc();
