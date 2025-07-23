const o2 = {
    "maxByteLength": 257,
};
const v4 = new ArrayBuffer(257, o2);
const v7 = this.WebAssembly.Module;
try { new v7(v4); } catch (e) {}
gc();
