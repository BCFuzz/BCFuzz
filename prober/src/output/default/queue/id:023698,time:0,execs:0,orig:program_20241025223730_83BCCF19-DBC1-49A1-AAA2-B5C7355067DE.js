const o4 = {
    "maxByteLength": 5854110,
};
const v6 = new ArrayBuffer(257, o4);
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
    Reflect.construct(Float32Array, [v6], BigInt64Array);
}
gc();
