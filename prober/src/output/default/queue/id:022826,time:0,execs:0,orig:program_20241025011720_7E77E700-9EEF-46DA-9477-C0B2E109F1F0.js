function f0(a1) {
    return f0;
}
Proxy.get = f0;
const v4 = new Proxy(Error, Proxy);
try { new v4(Proxy); } catch (e) {}
gc();
