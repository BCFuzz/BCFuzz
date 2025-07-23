function f1(a2) {
    return a2;
}
URIError.get = f1;
const v5 = Proxy.revocable(URIError, URIError).proxy;
try { new v5(f1, v5); } catch (e) {}
gc();
