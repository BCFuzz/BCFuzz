const v2 = createGlobalObject().Float16Array;
const v4 = new Int32Array(v2);
const v6 = new v2(v4.buffer);
v6[4] = v6;
v6.set(v4);
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
    for (let i30 = 0, i31 = 10; i20 < i31; i31--) {
    }
}
gc();
