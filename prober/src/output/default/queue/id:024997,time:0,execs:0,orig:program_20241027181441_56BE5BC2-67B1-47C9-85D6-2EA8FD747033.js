const o0 = {
};
const v2 = new Proxy(Proxy, o0);
const v5 = createGlobalObject().Float16Array;
const v7 = new Float32Array();
v5.from(v7).toSorted(v2);
gc();
