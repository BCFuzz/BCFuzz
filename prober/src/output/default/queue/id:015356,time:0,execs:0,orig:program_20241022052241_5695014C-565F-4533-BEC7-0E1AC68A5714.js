const v3 = ([8,8]).slice(8, 8);
const v6 = new ArrayBuffer(15);
const v8 = new DataView(v6);
v8.setFloat32(8, v3, 8);
gc();
