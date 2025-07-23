function f0() {
    return f0;
}
const o1 = {
    __proto__: f0,
};
try { Math.f16round(o1); } catch (e) {}
gc();
