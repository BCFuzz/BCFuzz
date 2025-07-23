function f0() {
    return f0;
}
const v2 = new BigUint64Array();
const v4 = new Proxy(f0, v2);
function f5(a6, a7) {
    const o8 = {
        __proto__: v4,
    };
    try { a6(o8); } catch (e) {}
    return f5;
}
f5(f5);
gc();
