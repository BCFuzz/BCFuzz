function f2() {
    return 9;
}
const v3 = [-2147483648,1073741825,4294967295,-1810460340];
const v6 = ("-789426228").constructor;
v6.toString = f2;
const v7 = v6.fromCharCode(12, v6, v3, "-789426228");
const o12 = {
    n(a9, a10, a11) {
        return v7;
    },
};
const t12 = o12.n;
t12(9, v7) <= -7979n;
gc();
