class C0 {
}
const v1 = new C0();
const t3 = v1.constructor;
const v3 = new t3();
const v6 = [v1];
v6.currency = v3;
const v7 = ["YlW",904623.0599490013];
try { v7.toLocaleString("YlW", v6); } catch (e) {}
gc();
