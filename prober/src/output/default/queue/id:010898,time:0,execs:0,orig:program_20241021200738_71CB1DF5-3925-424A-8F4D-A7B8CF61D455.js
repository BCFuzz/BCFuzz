function f0(a1, a2) {
    return a2;
}
const t3 = createGlobalObject().Float16Array;
const v6 = new t3();
try { v6.set(f0); } catch (e) {}
gc();
