const o2 = {
    "maxByteLength": 406,
};
const v4 = new SharedArrayBuffer(406, o2);
Reflect.construct(BigUint64Array, [v4], Float32Array);
gc();
