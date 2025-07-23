const o3 = {
    "maxByteLength": 1073741824,
};
const v5 = new ArrayBuffer(512, o3);
const v7 = new Uint8ClampedArray(v5);
Object.defineProperty(v7, 7, { writable: true, configurable: true, value: Uint8ClampedArray });
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
