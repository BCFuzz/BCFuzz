function f1() {
    return 9;
}
const v2 = [-2147483648,1073741825,4294967295,-1810460340];
const v5 = ("string").constructor;
v5.toString = f1;
const v6 = v5.fromCharCode(255, v5);
const o13 = {
    n(a8, a9, a10) {
        const v11 = this;
        try { v11.eval(v6); } catch (e) {}
    },
};
const t13 = o13.n;
t13(9, v2, o13);
gc();
