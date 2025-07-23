function f1() {
    WeakSet.prototype = WeakSet;
    const v3 = new WeakSet();
    try { v3.add(40324n); } catch (e) {}
    return f1;
}
const v7 = new Uint32Array(4046);
v7.reduce(f1);
gc();
