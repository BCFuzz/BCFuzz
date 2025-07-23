function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2.d;
let v4;
try { v4 = v3(); } catch (e) {}
const v7 = new BigInt64Array(2690);
v7["includes"](2690, v4);
gc();
