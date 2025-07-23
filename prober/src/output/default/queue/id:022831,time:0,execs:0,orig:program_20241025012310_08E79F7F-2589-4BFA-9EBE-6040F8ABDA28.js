const v2 = new Proxy(Reflect, Reflect);
const o3 = {
    ...v2,
};
gc();
