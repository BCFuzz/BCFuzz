const v0 = [-6.338855606817884,0.0,-366920.6320795086,-2.0];
const o4 = {
    "maxByteLength": 65537,
};
const v6 = new ArrayBuffer(1024, o4);
const v7 = new Int32Array(v6, v0, o4);
const v10 = createGlobalObject().Atomics;
try { v10.waitAsync(v7); } catch (e) {}
gc();
