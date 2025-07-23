const o1 = {
    "get": Boolean,
};
const v3 = new Proxy(Boolean, o1);
try { new v3(Boolean, v3); } catch (e) {}
gc();
