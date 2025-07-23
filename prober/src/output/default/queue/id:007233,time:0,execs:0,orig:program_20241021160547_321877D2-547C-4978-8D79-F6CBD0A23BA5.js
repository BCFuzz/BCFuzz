const o2 = {
};
const v3 = new ArrayBuffer();
try { new Float32Array(v3, o2, 1148); } catch (e) {}
gc();
