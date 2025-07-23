function f1(a2) {
    return f1;
}
Int8Array.get = f1;
const v5 = Proxy.revocable(Int8Array, Int8Array).proxy;
try { new v5(Int8Array); } catch (e) {}
gc();
