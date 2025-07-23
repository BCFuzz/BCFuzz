const v2 = new Date();
const v3 = v2.toLocaleDateString();
try { v3.replaceAll(v3, Float64Array); } catch (e) {}
class C5 {
}
const v6 = new C5();
v6.__lookupGetter__(v3);
gc();
