function f0() {
    return f0;
}
function f1() {
    const o3 = {
    };
    const v5 = new Proxy(this, o3);
    try { v5.bind(); } catch (e) {}
}
f0[Symbol.toPrimitive] = f1;
const o9 = {
    __proto__: f0,
};
Math.f16round(o9);
gc();
