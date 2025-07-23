const v1 = ([]).slice();
const v2 = v1.pop();
const v5 = new ArrayBuffer(15);
const v7 = new DataView(v5);
v7.getInt16(v1, v2);
gc();
