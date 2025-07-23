const v1 = [-2147483648,1073741825,4294967295,-1810460340];
function f2() {
    return 64;
}
const v5 = ("-789426228").constructor;
v5.valueOf = f2;
const v6 = v5.fromCharCode(255, v5, v1, "-789426228");
const o13 = {
    n(a8, a9, a10) {
        const v11 = this;
        try { v11.eval(v6); } catch (e) {}
        return v1;
    },
};
const t14 = o13.n;
t14(v1);
gc();
