const v2 = new Uint8Array(6, 6);
const t1 = v2.subarray();
delete t1[6];
gc();
