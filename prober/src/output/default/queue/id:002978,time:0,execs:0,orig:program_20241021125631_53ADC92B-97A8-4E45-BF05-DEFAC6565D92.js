const o1 = {
};
const v3 = new Proxy(Uint8Array, o1);
new v3(v3);
gc();
