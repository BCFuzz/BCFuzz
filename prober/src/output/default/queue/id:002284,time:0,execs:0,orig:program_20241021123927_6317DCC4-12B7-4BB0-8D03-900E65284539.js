const o1 = {
};
const v3 = new Proxy(Array, o1);
v3();
gc();
