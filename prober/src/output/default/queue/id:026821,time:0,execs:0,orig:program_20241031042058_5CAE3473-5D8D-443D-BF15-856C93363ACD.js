const v2 = new Int32Array(127);
const o10 = {
    toString(a4, a5, a6) {
        return JSON["stringify"](this);
    },
    "g": v2,
};
const o15 = {
    n(a12, a13, a14) {
        return Int32Array;
    },
};
const v17 = o15.n.constructor;
try { v17(o10, v17); } catch (e) {}
gc();
