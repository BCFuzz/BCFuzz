const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new Float32Array(o1);
const t5 = v5.constructor;
const v7 = new t5(Float32Array);
try { v7.sort(v3); } catch (e) {}
gc();
