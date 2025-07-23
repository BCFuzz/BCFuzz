const o1 = {
};
const v3 = new Proxy(Float64Array, o1);
([o1,o1,o1]).concat(v3);
gc();
