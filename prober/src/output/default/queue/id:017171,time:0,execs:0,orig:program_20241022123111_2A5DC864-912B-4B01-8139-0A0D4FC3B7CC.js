for (let i2 = 0, i3 = 10;
    i3--, i2 < i3;
    (() => {
        for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
        }
    })()) {
}
let v20 = 4294967296n;
const v21 = v20--;
const v24 = new BigInt64Array(128);
v24.subarray(128, 128);
v24.indexOf(v21);
gc();
