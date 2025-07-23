const v1 = ([])[1073741823];
let v2;
try { v2 = v1(); } catch (e) {}
const v3 = [7,2,2147483649,1127304451];
const v6 = new ArrayBuffer(15);
const v8 = new DataView(v6);
v8.setFloat16(v6, v3, v2);
gc();
