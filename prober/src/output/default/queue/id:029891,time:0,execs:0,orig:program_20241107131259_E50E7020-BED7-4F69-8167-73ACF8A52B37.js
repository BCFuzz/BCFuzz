const o3 = {
    "maxByteLength": 268435439,
};
const v5 = new SharedArrayBuffer(3449, o3);
const v6 = new Uint8Array(v5);
const o15 = {
    n(a8, a9, a10) {
        return createGlobalObject().Atomics.compareExchange(v6);
    },
};
const v16 = o15.n;
v16(v16, o15, 268435439, o15, o3);
gc();
