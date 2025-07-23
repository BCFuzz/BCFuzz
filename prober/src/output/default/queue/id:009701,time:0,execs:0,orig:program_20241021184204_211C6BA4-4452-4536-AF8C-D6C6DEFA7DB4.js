const o2 = {
    "maxByteLength": 4222653564,
};
const v4 = new SharedArrayBuffer(3227, o2);
const v6 = new BigUint64Array(v4);
v6.toReversed();
gc();
