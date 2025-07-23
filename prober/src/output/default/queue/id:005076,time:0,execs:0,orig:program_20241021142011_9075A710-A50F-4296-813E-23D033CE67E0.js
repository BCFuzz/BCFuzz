const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
class C2 extends Int32Array {
    1 = v1;
}
try { new C2(); } catch (e) {}
gc();
