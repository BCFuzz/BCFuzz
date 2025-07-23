const v2 = Proxy.revocable(isFinite, isFinite);
v2.revoke(isFinite);
const v4 = v2.proxy;
const v6 = this.constructor;
try { v6.getOwnPropertyDescriptors(v4); } catch (e) {}
gc();
