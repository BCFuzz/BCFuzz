for (let [i14, i15] = (() => {
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        }
        return [0, 10];
    })();
    i15--, i14 < i15;
    ) {
}
const v22 = Proxy.revocable(isFinite, isFinite);
v22.revoke(v22, isFinite);
const v24 = v22.proxy;
const o31 = {
    n(a26, a27, a28) {
        delete a26[this];
        try { a28(v24); } catch (e) {}
        return a28;
    },
};
const v32 = o31.n;
v32(v32, o31, v32);
gc();
