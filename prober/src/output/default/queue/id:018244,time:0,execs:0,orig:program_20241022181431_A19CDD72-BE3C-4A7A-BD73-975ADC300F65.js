const o2 = {
    "get": 166,
};
const v4 = new Proxy(WeakSet, o2);
try { new v4(); } catch (e) {}
gc();
