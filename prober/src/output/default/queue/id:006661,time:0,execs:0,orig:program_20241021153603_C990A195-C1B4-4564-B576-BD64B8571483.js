const v3 = Date(4096);
class C4 {
}
const v5 = C4.constructor;
try { v5(v3, 4096, undefined); } catch (e) {}
gc();
