function f0() {
    return f0;
}
const v2 = new BigInt64Array();
try { v2.fill(f0); } catch (e) {}
gc();
