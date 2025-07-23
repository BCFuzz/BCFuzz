const v1 = this.WebAssembly;
const v2 = v1.Instance;
try { new v2(v1); } catch (e) {}
gc();
