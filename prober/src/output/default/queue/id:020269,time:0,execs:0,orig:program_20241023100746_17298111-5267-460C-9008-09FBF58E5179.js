const o1 = {
    "get": Array,
};
const v3 = new Proxy(Array, o1);
try { new v3(); } catch (e) {}
gc();
