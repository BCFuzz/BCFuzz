const o4 = {
    n(a1, a2, a3) {
        return a1;
    },
};
const v5 = o4.n;
const v9 = new Uint8ClampedArray(9);
Reflect.defineProperty(v9, 4, v5);
gc();
