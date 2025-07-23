const v2 = createGlobalObject().Float16Array;
const o11 = {
    n(a4, a5, a6) {
        const v8 = new SharedArrayBuffer();
        const v9 = new v2(v8);
        return v9.sort();
    },
};
const t8 = o11.n;
t8();
gc();
