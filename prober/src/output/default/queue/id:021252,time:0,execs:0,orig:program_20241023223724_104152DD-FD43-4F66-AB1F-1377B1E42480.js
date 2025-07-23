const o1 = {
};
const v3 = new Proxy(Int32Array, o1);
const v4 = new v3(v3, v3);
v4.sort(v3);
gc();
