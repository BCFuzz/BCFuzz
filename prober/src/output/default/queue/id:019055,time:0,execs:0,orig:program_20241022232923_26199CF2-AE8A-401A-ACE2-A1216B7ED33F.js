const o2 = {
    "get": WeakMap,
};
const v4 = new Proxy(WeakMap, o2);
try { new Uint8ClampedArray(v4); } catch (e) {}
gc();
