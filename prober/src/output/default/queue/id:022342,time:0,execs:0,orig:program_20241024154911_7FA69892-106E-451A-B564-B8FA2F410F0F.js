function f0() {
    class C2 extends WeakSet {
    }
    const v3 = new WeakSet();
    return v3.add(C2);
}
const v7 = new Uint32Array(4046);
const v8 = v7.reduce(f0);
v8.add(v8);
gc();
