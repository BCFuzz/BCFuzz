const v2 = new Int16Array(15);
function f3() {
    class C5 extends WeakSet {
    }
    const v6 = new C5();
    return v6.add(v6);
}
const v9 = new Uint32Array(15);
const v10 = v9.reduce(f3);
try { v10.add(v2); } catch (e) {}
gc();
