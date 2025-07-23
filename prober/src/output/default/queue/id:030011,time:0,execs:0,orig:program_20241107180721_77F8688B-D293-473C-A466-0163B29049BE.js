const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v6 = new Uint16Array(v5);
createGlobalObject().Atomics.add(v6);
for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
}
for (let i23 = 0, i24 = 10;
    i23 < i24;
    (() => {
        i24--;
        for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
        }
    })()) {
}
gc();
