const v2 = new BigInt64Array();
function f3() {
    Object.defineProperty(v2, -(1073741824 && 64), { configurable: true, set: f3 });
    return v2;
}
try { f3.call(); } catch (e) {}
gc();
