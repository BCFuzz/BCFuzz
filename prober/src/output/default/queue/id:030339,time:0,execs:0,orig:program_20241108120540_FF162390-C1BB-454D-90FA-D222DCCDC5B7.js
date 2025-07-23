for (let [i14, i15] = (() => {
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        }
        return [0, 10];
    })();
    i15--, i14 < i15;
    ) {
}
const v22 = Proxy.revocable(isFinite, isFinite);
const v23 = v22.revoke(v22, v22);
const v24 = v22.proxy;
const o30 = {
    n(a26, a27, a28) {
        a26.e = a26;
        try { a28(v24); } catch (e) {}
        return v23;
    },
};
const v31 = o30.n;
v31(v31, o30, v31);
gc();
