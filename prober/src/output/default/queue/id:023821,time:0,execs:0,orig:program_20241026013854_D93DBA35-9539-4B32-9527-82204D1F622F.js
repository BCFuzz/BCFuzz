const v0 = /xyz{0,1}?t7?/mdv;
function f1(a2) {
    return a2;
}
Proxy.get = f1;
const v5 = new Proxy(RegExp, Proxy);
try { new v5(v0); } catch (e) {}
gc();
