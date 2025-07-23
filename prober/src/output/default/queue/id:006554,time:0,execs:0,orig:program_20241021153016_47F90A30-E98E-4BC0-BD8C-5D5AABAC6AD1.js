const o0 = {
};
function f1() {
    return o0;
}
function f2(a3) {
    function f5() {
        o0[f1] ^= a3;
        return f2;
    }
    Date.toString = f5;
    return f2;
}
const o14 = {
    valueOf(a8, a9, a10) {
        const v12 = ("string").codePointAt(this.valueOf(f2, this));
        a8[1] += v12 - v12;
        return o0;
    },
};
const v15 = [294943.5481266058,2.2250738585072014e-308,NaN];
v15.constructor = f2;
const t22 = v15.constructor;
t22(o14);
try { Date.toString(); } catch (e) {}
gc();
