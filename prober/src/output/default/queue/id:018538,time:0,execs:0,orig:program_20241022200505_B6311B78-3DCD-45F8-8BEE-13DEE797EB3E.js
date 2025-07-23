const v0 = /xyz{0,1}?t7?/du;
function f1(a2) {
    return a2;
}
Proxy.get = f1;
const v5 = new Proxy(Float32Array, Proxy);
try { new v5(v0); } catch (e) {}
gc();
