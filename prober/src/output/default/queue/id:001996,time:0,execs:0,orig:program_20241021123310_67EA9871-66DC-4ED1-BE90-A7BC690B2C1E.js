const v1 = new Int8Array();
const o2 = {
};
const v4 = new Proxy(v1, o2);
v4[2] = Int8Array;
gc();
