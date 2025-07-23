Int8Array.get = Array;
const v4 = Proxy.revocable(Int8Array, Int8Array).proxy;
try { new v4(); } catch (e) {}
gc();
