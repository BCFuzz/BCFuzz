function f0(a1, a2) {
    return a2;
}
const v4 = new Int16Array();
const v5 = v4.slice();
try { v5.set(f0); } catch (e) {}
gc();
