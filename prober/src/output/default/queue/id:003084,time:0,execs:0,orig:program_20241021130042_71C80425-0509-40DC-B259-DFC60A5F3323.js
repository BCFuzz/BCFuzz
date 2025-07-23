const v3 = new Float64Array(7);
const v4 = v3.reverse();
v4[4] = v4;
new Int8Array(v3);
const v8 = new Int8Array(254);
const v10 = new Int32Array(v8);
const v11 = new Float64Array(v10);
try { v11.sort(Float64Array); } catch (e) {}
try { Reflect.preventExtensions(-4.0); } catch (e) {}
gc();
