function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = Proxy.revocable(isFinite, isFinite);
v5.revoke(Proxy, v5, v5, Proxy);
const v7 = v5.proxy;
const v9 = this.constructor;
try { v9.defineProperties(v2, v7); } catch (e) {}
gc();
