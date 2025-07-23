async function f0(a1, a2) {
    return f0;
}
const v4 = f0().finally;
try { v4.constructor(v4); } catch (e) {}
gc();
