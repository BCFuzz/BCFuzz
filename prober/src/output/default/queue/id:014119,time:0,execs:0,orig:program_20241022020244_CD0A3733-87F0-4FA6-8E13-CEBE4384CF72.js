const t0 = ("valueOf").constructor;
const v3 = new t0();
function f4() {
    return BigUint64Array();
}
v3[Symbol.toPrimitive] = f4;
try { v3.toLowerCase(); } catch (e) {}
gc();
