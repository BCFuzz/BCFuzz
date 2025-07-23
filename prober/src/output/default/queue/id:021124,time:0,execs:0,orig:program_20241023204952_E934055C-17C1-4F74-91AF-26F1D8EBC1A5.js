for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
const o32 = {
    "maxByteLength": 6,
};
const v34 = new ArrayBuffer(5, o32);
const v36 = new Float32Array(v34);
v34.transfer();
v36[10] = v34;
gc();
