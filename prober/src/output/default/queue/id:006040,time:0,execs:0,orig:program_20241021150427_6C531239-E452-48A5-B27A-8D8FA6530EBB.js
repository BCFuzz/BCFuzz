const v2 = new Int8Array(189);
const v3 = new Int8Array();
const v5 = new Proxy(v3, v2);
v5[2] = Int8Array;
gc();
