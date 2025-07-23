const o1 = {
    "get": Uint8Array,
};
const v3 = new Proxy(Uint8Array, o1);
try { new v3(); } catch (e) {}
gc();
