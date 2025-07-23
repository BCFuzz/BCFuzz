const v2 = new Proxy(Float32Array, Proxy);
const o3 = {
    ...v2,
};
gc();
