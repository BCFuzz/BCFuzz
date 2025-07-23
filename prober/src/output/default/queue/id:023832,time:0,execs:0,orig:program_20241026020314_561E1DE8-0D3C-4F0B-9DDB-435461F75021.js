const v2 = new Proxy(Reflect, Reflect);
v2.preventExtensions(v2);
const o4 = {
    ...v2,
};
gc();
