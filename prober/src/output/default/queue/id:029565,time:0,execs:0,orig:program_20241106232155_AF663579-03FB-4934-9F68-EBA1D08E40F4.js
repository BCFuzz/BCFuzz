const v2 = Proxy.revocable(isFinite, isFinite);
v2.revoke(v2, Proxy, Proxy, isFinite, Proxy);
const v4 = v2.proxy;
const v6 = this.constructor;
try { v6.getOwnPropertySymbols(v4); } catch (e) {}
gc();
