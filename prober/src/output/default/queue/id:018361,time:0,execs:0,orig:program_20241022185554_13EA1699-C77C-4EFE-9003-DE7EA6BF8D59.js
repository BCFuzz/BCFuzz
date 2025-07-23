for (let i2 = 0, i3 = 10;
    i2 !== i3;
    (() => {
        const v8 = ([-2147483648,-1024]).includes();
        for (let i11 = 0, i12 = 10; v8 < i12; i12--) {
        }
        i3--;
    })()) {
}
const v24 = new Int16Array(4096);
for (let i27 = 0, i28 = 10; i28--, i27 < i28;) {
    createGlobalObject().Atomics.or(v24);
}
gc();
