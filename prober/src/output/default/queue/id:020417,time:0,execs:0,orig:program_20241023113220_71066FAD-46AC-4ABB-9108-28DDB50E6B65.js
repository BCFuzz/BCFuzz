class C0 {
}
const o3 = {
    "maxByteLength": 536870888,
};
const v5 = new SharedArrayBuffer(512, o3);
Reflect.construct(Uint8Array, [v5], C0);
gc();
