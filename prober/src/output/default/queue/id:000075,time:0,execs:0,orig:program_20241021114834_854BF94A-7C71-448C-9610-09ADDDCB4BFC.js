const o1 = {
};
const v3 = new Proxy(Int16Array, o1);
const o4 = {
};
o4.a = v3;
gc();
