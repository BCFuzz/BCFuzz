const v1 = new SharedArrayBuffer();
try { new Int32Array(v1, -536870912); } catch (e) {}
const v6 = this?.RegExp;
let v7;
try { v7 = new v6(this, Int32Array); } catch (e) {}
const v8 = this.WebAssembly;
v8.Memory;
try { v7(); } catch (e) {}
v8.Instance;
gc();
