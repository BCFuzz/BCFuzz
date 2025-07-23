function f0() {
    return f0;
}
const o1 = {
    __proto__: f0,
};
const v3 = new Float64Array(o1, o1, f0);
try { v3.with(o1); } catch (e) {}
gc();
