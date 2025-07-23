const v1 = ("boolean").constructor;
const o2 = {
};
const v4 = new Proxy(v1, o2);
Uint32Array.from(v4).toSorted(v4);
gc();
