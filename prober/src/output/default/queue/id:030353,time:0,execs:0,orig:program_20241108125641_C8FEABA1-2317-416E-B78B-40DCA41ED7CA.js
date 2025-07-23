for (let [i14, i15] = (() => {
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        }
        return [0, 10];
    })();
    i15--, i14 < i15;
    ) {
}
const v22 = Proxy.revocable(isFinite, isFinite);
v22.revoke();
const v24 = v22.proxy;
const o33 = {
    n(a26, a27, a28) {
        function f29() {
            return f29;
        }
        function f30(a31) {
            return a31;
        }
        Object.defineProperty(a26, "e", { get: f29, set: f30 });
        try { a28(v24); } catch (e) {}
        return v22;
    },
};
const v34 = o33.n;
v34(v34, o33, v34);
gc();
