function f2() {
    new WeakSet();
    const v5 = new WeakSet();
    try { v5.add(40324n); } catch (e) {}
    return WeakSet;
}
const v8 = new Uint32Array(2422);
v8.reduce(f2);
gc();
