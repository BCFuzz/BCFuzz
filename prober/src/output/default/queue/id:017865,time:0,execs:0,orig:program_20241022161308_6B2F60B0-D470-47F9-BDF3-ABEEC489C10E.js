function f0() {
    return f0;
}
const v2 = new BigUint64Array();
v2.get = f0;
const v5 = new Proxy(Int32Array, v2);
try { new v5(); } catch (e) {}
gc();
