const v2 = Proxy.revocable(isFinite, isFinite);
v2.revoke(Proxy, isFinite, isFinite, isFinite, v2);
const v4 = v2.proxy;
const v6 = this.constructor;
try { v6.isExtensible(v4); } catch (e) {}
gc();
