function f1() {
    return f1;
}
function f2() {
    const v3 = new Set();
    const v4 = v3.union(v3);
    function f5(a6, a7, a8) {
        const v9 = a7.clear;
        try { v9(); } catch (e) {}
        return a8;
    }
    f5(f5, v4);
}
f1[Symbol.toPrimitive] = f2;
const o14 = {
    __proto__: f1,
};
Math.f16round(o14);
gc();
