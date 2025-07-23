function f0() {
    class C2 extends WeakSet {
    }
    const v3 = new C2();
    return v3.add(v3);
}
const v7 = new Uint32Array(4046);
v7.reduce(f0);
gc();
