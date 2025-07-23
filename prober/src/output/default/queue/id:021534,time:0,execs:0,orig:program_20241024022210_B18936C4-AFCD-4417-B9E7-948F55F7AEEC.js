const o2 = {
    "get": Array,
};
const v4 = new Proxy(Array, o2);
try { new v4(Int32Array); } catch (e) {}
gc();
