const o4 = {
    n(a1, a2, a3) {
        return a2;
    },
};
const v5 = o4.n;
const v6 = v5.bind(o4, o4, o4, v5, o4);
v5(o4, o4).__defineSetter__(v6, v6);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
}
gc();
