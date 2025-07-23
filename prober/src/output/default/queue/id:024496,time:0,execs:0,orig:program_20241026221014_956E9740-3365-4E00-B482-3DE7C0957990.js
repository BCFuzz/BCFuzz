const o4 = {
    n(a1, a2, a3) {
        return a1;
    },
};
const v5 = o4.n;
const o7 = {
};
const v9 = new Proxy(v5, o7);
const v10 = new Uint16Array(v5, v5, v5);
v10.toSorted(v9);
gc();
