const o1 = {
    "apply": Array,
};
const v3 = new Proxy(Array, o1);
v3();
gc();
