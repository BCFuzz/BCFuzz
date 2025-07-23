const v2 = new Uint32Array(7);
v2.subarray();
const o4 = {
};
const v5 = o4.constructor;
try { v5.freeze(v2); } catch (e) {}
gc();
