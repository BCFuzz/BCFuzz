const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const o2 = {
    __proto__: v1,
};
try { v1.set(o2); } catch (e) {}
gc();
