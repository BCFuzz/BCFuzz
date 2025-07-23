const v2 = new BigUint64Array();
function f3(a4, a5) {
    return BigInt64Array(v2, a4, a4);
}
v2.toString = f3;
const v8 = ("object").normalize();
try { v8.endsWith(v2); } catch (e) {}
gc();
