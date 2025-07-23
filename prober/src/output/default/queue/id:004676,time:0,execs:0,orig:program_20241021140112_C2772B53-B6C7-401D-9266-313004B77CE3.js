const v2 = Array(1236);
class C3 {
}
try { C3.apply(Array, v2); } catch (e) {}
gc();
