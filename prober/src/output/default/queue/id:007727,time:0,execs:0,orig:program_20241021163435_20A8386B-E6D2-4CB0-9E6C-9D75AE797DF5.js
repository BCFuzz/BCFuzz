class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3(v1, C0);
const v4 = v3.__defineSetter__;
const v7 = Uint16Array ^ [-10];
const v10 = new BigUint64Array(586);
for (let i = 0; i < 5; i++) {
    const o13 = {
        "maxByteLength": 256,
    };
    const v15 = new SharedArrayBuffer(256, o13);
    const v17 = new DataView(v15);
    try { v17.setUint32(256, v4); } catch (e) {}
    try { v17.getUint8(v7); } catch (e) {}
}
for (const v20 of v10) {
}
gc();
