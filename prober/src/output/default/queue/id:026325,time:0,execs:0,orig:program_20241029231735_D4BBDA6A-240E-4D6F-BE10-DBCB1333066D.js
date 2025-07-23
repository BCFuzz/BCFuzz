function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 5,
};
const v5 = new SharedArrayBuffer(5, o3);
const v7 = new Int8Array(v5);
for (let v8 = 0; v8 < 10; v8++) {
    const v9 = [v8];
    const v11 = [f0];
    Reflect.apply(v9.every, v7, v11);
    for (let i16 = 0, i17 = 10; i16 <= i17; i17--) {
    }
}
gc();
