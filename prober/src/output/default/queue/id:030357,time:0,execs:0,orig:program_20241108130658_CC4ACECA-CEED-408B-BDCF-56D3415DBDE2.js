const v3 = Proxy.revocable(isFinite, isFinite).proxy;
v3.isExtensible = v3;
const v5 = this.constructor;
try { v5.isExtensible(v3); } catch (e) {}
gc();
