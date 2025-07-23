Array();
const v4 = [1105245881,-28902,7,-1,536870889,173329024,-51637,-65481,-441989430];
const v5 = [6];
const o14 = {
    o(a7, a8) {
        return v5;
    },
    "g": 2074680938n,
    "d": v4,
    "maxByteLength": 1532981908n,
    toString(a10, a11, a12) {
        return a12;
    },
    "e": v5,
    next() {
        return this;
    },
};
const o15 = {
};
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    const v22 = new FinalizationRegistry(Int8Array);
    v22.register(a18, o14);
    function F24(a26, a27, a28) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = v22;
    }
    const v29 = new F24(o14, v22, FinalizationRegistry);
    const v30 = v29.constructor;
    try { v30(FinalizationRegistry, v5, Int8Array); } catch (e) {}
}
new F16(o15);
gc();
