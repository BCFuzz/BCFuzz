function f0() {
    return f0;
}
const v1 = f0.constructor;
try { v1(16, -899297474n); } catch (e) {}
gc();
