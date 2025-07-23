function f0(a1) {
    const o5 = {
        get b() {
            0 % 0;
            return a1;
        },
    };
    return o5;
}
const o11 = {
    n(a7, a8, a9) {
        try { this.decodeURI(a8); } catch (e) {}
        return this;
    },
};
const t15 = o11.n;
t15(o11, f0);
gc();
