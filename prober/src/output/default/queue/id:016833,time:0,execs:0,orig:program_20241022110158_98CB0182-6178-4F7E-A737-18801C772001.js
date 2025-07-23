function f0() {
    function f1(a2) {
        return f1;
    }
    return f1;
}
class C3 {
}
const v4 = new C3();
v4.toString = f0;
Math.type = v4;
const v6 = Math.sign(f0);
const o15 = {
    n(a8, a9, a10) {
        const v11 = this;
        const v13 = v11.Intl.DisplayNames;
        try { new v13(v6, Math); } catch (e) {}
        return v6;
    },
};
const v16 = o15.n;
v16(Math, v16, o15, v16);
gc();
