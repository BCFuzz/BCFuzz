const o1 = {
};
const v3 = new Proxy(Int16Array, o1);
v3.length = v3;
gc();
