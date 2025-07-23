class C0 {
}
const v1 = new C0();
const v2 = new C0();
const o7 = {
    "maxByteLength": 2329388498,
};
const v9 = new ArrayBuffer(268435456, o7);
const v11 = new Float64Array(v9, v2, v1);
try { v11.__defineGetter__(10000n, Uint8ClampedArray); } catch (e) {}
gc();
