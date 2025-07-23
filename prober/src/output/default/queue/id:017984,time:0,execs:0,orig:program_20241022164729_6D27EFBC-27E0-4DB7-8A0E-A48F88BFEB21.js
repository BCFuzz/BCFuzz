const v2 = new Float64Array(1);
const o3 = {
    __proto__: v2,
};
const o4 = {
};
const v6 = new Proxy(o3, o4);
v6[0] = v6;
gc();
