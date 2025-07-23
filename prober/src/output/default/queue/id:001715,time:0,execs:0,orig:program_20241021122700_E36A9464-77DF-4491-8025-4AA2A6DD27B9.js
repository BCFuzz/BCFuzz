const v1 = [-65536n];
v1[2] = v1;
[-65536n,v1] ^ 536870889;
const v8 = new Int16Array(13);
try { v8.sort(Int8Array); } catch (e) {}
gc();
