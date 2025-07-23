const v1 = +-2.5922760596303916e+307;
const v2 = [7,2,2147483649,1127304451];
const v5 = new ArrayBuffer(15);
const v7 = new DataView(v5);
v7.setFloat16(v5, v2, v1);
gc();
