const v1 = new ArrayBuffer();
v1.transferToFixedLength();
const v5 = this.WebAssembly.Module;
try { new v5(v1); } catch (e) {}
gc();
