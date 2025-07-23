for (let i2 = 0, i3 = 10;
    i2 !== i3;
    (() => {
        const v7 = [-2147483648,-1024];
        const v8 = v7.includes(v7);
        for (let i11 = 0, i12 = 10; v8 < i12; i12--) {
        }
        i3--;
    })()) {
}
const v24 = new Int16Array(4096);
v24.subarray(4096, 4096);
for (let i28 = 0, i29 = 10; i29--, i28 < i29;) {
    createGlobalObject().Atomics.or(v24);
}
gc();
