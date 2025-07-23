const o2 = {
    "maxByteLength": 213,
};
const v4 = new ArrayBuffer(6, o2);
const v6 = new Uint16Array(v4);
const v8 = new BigInt64Array();
const o14 = {
    n(a10, a11, a12) {
        try { v8.set(v6); } catch (e) {}
        return v4;
    },
};
const t12 = o14.n;
t12();
gc();
