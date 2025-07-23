for (let i4 = 0, i5 = 10;
    i4 !== i5;
    (() => {
        const v10 = ([-2147483648,-1024]).includes(i4, i4);
        for (let i13 = 0, i14 = 10; v10 < i14; i14--) {
        }
        i5--;
    })()) {
}
const v25 = new Int16Array();
const t10 = v25.constructor;
const v27 = new t10(793);
for (let i30 = 0, i31 = 10; i31--, i30 < i31;) {
    createGlobalObject().Atomics.store(v27, i31, 127);
}
gc();
