new Date();
const v3 = new SharedArrayBuffer();
try { new Int32Array(v3, -536870912); } catch (e) {}
const v8 = this?.RegExp;
try { new v8(this, Int32Array); } catch (e) {}
const v10 = this.WebAssembly;
const v11 = v10.Memory;
try { v11(); } catch (e) {}
v10.Instance;
gc();
