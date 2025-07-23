const v3 = new Proxy(Reflect, Reflect);
v3.defineProperty(v3, Uint8Array, v3);
const o5 = {
    ...v3,
};
gc();
