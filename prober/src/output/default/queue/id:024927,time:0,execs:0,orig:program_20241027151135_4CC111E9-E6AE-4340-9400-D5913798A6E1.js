const o2 = {
    "get": FinalizationRegistry,
};
const v4 = new Proxy(FinalizationRegistry, o2);
try { new v4(Int32Array); } catch (e) {}
gc();
