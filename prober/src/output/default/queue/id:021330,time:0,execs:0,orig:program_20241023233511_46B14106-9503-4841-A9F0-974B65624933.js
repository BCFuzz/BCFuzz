const o2 = {
    "get": -9n,
};
const v4 = new Proxy(RegExp, o2);
try { new Int8Array(v4); } catch (e) {}
gc();
