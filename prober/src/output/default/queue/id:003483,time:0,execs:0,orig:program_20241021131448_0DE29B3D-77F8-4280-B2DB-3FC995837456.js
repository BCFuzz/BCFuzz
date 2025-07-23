const v1 = new Int32Array();
const t1 = v1.buffer.constructor;
new t1();
gc();
