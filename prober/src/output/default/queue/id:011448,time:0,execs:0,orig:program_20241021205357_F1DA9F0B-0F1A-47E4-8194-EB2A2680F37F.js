class C0 {
}
const v1 = new C0();
const o3 = {
    4: undefined,
    1073741824: v1,
};
o3[0] = o3;
const v7 = new Float32Array(3008);
for (const v8 in v7) {
    o3[0] **= 1024;
}
gc();
