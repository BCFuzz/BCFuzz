function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        const v7 = [4294967296,7,-4294967296,-1,268435439,16,536870887,2147483649,9007199254740992];
        try {
        const t0 = 127;
        t0(...v7);
        } catch (e) {}
        for (let i14 = 0, i15 = 10; i14 !== i15; i15--) {
        }
        const v22 = new Int32Array(255);
        for (const v23 in v22) {
        }
    }
}
new C1();
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    const v41 = [1754061190,16,11,256,-62769,-256,8];
    function f42() {
        return f42;
    }
    const o43 = {
        __proto__: v41,
    };
    Object.defineProperty(v41, 10, { configurable: true, set: f42 });
}
new F35(C1, f0, C1, F35);
const o51 = {
    toString(a48, a49) {
        const v50 = this.__proto__;
        v50[16n] = 256n;
        return v50;
    },
};
o51.toString();
gc();
