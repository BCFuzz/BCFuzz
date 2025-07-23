const o1 = {
    "get": WeakMap,
};
const v3 = new Proxy(WeakMap, o1);
try { new v3(v3, v3); } catch (e) {}
gc();
