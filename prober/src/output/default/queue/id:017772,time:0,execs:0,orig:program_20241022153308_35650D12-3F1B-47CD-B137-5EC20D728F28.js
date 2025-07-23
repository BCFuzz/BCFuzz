function f1(a2, a3) {
    const o5 = {
        __proto__: a3,
        get f() {
            this[this] &= a3;
            return 257n;
        },
    };
    return o5;
}
const v6 = f1(257n, f1);
function f7(a8, a9, a10) {
    const o11 = {
        ...a10,
    };
    return a8;
}
try { f7(f7, f7, v6); } catch (e) {}
gc();
