for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let i7 = 0, i8 = 10; i7 != i8; i8--) {
        }
        return v4;
    })();
    i3--) {
}
const v22 = createGlobalObject().Float16Array;
const v24 = new v22(9);
Object.defineProperty(v24, 2, { writable: true, enumerable: true, value: v22 });
gc();
