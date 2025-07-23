const v2 = new ArrayBuffer(1024, ArrayBuffer);
const v4 = new Int32Array(v2);
v2["transfer"]();
v4[1024];
gc();
