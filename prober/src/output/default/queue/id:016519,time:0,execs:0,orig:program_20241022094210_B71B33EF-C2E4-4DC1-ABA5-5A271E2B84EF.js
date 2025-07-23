for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const o20 = {
    n(a11, a12, a13) {
        const v14 = this;
        try { a12("number"); } catch (e) {}
        const v18 = v14.Intl.DisplayNames;
        try { new v18(a11); } catch (e) {}
        return a13;
    },
};
const v21 = o20.n;
v21(v21, v21);
gc();
