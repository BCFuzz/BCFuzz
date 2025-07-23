class C2 extends WeakMap {
    f = WeakMap;
}
const v3 = new C2();
const v4 = v3.f;
try { new v4(-9223372036854775807); } catch (e) {}
gc();
