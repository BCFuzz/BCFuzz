function f2() {
    return 9;
}
const v3 = [-2147483648,1073741825,4294967295,-1810460340];
const v5 = ("-789426228").constructor;
v5.toString = f2;
const v6 = v5.fromCharCode(34, v5, v3, "-789426228");
const o13 = {
    n(a8, a9, a10) {
        const v11 = this;
        try { v11.eval(v6); } catch (e) {}
        return "-789426228";
    },
};
const v14 = o13.n;
v14(o13, v14, "-789426228");
gc();
