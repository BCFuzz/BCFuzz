const v2 = new Int16Array();
const o3 = {
};
o3.get = ensureArrayStorage;
const v5 = new Proxy(v2, o3);
v5[1276];
gc();
