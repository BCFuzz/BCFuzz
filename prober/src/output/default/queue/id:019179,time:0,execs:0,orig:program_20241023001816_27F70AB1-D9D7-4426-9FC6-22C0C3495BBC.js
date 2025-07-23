const v2 = Proxy.revocable(Int8Array, Int8Array);
v2.revoke();
const v4 = v2.proxy;
try { v4(Int8Array, v2); } catch (e) {}
gc();
