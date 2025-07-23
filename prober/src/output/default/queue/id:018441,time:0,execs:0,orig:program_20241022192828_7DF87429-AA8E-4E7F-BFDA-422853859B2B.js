function f1() {
    return f1;
}
const v2 = new BigUint64Array();
v2.get = f1;
const v4 = new Proxy(BigUint64Array, v2);
try { new v4(); } catch (e) {}
gc();
