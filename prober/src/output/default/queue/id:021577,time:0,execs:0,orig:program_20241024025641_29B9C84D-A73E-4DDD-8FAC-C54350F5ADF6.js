const o3 = {
    "maxByteLength": 64,
};
const v5 = new ArrayBuffer(64, o3);
Reflect.construct(DataView, [v5], Date);
gc();
