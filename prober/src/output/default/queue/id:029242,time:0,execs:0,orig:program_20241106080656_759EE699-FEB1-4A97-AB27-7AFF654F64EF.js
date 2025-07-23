const v1 = ["K","K","K","K"];
v1[129] = "K";
const t2 = createGlobalObject().Float16Array;
const v6 = new t2(v1);
const v8 = new Int8Array(v6.buffer);
v8.set(v6);
gc();
