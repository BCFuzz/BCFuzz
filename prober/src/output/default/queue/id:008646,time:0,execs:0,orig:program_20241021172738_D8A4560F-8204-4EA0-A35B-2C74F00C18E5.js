function f1() {
    const v3 = new WeakSet();
    try { v3.add(40324n); } catch (e) {}
}
const v7 = new Uint32Array(4046);
v7.reduce(f1);
gc();
