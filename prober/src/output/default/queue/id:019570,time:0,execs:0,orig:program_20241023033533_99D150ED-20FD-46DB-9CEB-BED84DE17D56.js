const o1 = {
};
const v3 = new Proxy(Float64Array, o1);
const v5 = new Int16Array();
v5.sort(v3);
gc();
