const v1 = [7,2,2147483649,1127304451];
const v4 = new ArrayBuffer(15);
const v6 = new DataView(v4);
v6.setUint16(v4, v1, -1637549205);
gc();
