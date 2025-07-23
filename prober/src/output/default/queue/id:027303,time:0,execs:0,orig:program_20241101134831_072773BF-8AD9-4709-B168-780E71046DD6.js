const v1 = new Uint8Array(Uint8Array);
const v2 = v1.slice(Uint8Array, v1);
const o3 = {
};
const v5 = new Proxy(v2, o3);
const o15 = {
    __proto__: v5,
    [undefined](a8, a9, a10) {
        createGlobalObject().Atomics.isPrototypeOf(this);
    },
};
o15.undefined();
gc();
