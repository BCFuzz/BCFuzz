const v2 = Proxy.revocable(Int8Array, Int8Array);
const v3 = v2.revoke();
const v4 = v2.proxy;
try { new v4(v3, v4, Proxy, Int8Array, v3); } catch (e) {}
gc();
