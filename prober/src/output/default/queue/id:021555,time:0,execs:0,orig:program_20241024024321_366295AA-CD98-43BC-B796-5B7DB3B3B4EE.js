const v1 = new Int8Array();
const v3 = new Uint32Array();
const o4 = {
    __proto__: v1,
};
try { v3.set(o4); } catch (e) {}
gc();
