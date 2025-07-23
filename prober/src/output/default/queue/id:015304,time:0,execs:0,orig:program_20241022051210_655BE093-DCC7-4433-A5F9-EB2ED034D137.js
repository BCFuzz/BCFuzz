function f0(a1) {
    const o5 = {
        get b() {
            return 0 % 0;
        },
    };
    return a1;
}
const o12 = {
    n(a7, a8, a9) {
        const v10 = this;
        return v10.unescape(f0);
    },
};
const t14 = o12.n;
t14(o12, f0, o12);
gc();
