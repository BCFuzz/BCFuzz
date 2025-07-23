let v1;
try { v1 = Int16Array.n(); } catch (e) {}
class C2 {
}
const v4 = new Float64Array();
v4.set(C2, v1);
gc();
