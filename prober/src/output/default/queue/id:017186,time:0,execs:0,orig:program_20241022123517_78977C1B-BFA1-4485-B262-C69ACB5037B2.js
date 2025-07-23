const v1 = new Set();
const o3 = {
    "get": Array,
};
const v5 = new Proxy(v1, o3);
const v6 = v5[0];
try { v6.toLocaleString(); } catch (e) {}
gc();
