for (let [i15, i16] = (() => {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        return [0, 10];
    })();
    i16--, i15 < i16;
    ) {
}
const v23 = Proxy.revocable(isFinite, isFinite);
v23.revoke();
const v25 = v23.proxy;
const o32 = {
    n(a27, a28, a29) {
        delete a27[16];
        try { a29(v25); } catch (e) {}
        return this;
    },
};
const v33 = o32.n;
v33(v33, o32, v33);
gc();
