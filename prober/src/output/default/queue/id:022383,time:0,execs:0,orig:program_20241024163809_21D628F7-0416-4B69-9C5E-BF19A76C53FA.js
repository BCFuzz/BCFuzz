const o2 = {
    "get": -49239,
};
const v4 = new Proxy(Float32Array, o2);
try { new v4(); } catch (e) {}
gc();
