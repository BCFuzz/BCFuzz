const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v4 = new Int8Array(v1);
const v5 = new v2();
v5.subarray();
v4.subarray().set(v5);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
for (let i21 = 0, i22 = 10; i22--, i21 < i22;) {
}
for (let i31 = 0, i32 = 10;
    (() => {
        const v33 = i31 < i32;
        for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
        }
        return v33;
    })();
    i32--) {
}
gc();
