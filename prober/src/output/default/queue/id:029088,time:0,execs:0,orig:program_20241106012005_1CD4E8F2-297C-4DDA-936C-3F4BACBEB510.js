function f0() {
    return f0;
}
const v1 = f0.bind();
const v3 = new Map();
v3.constructor = v1;
try { v3(); } catch (e) {}
gc();
