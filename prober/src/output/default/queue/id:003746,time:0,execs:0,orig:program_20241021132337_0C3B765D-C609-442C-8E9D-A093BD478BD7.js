const v1 = /9(?!a)?a/gs.constructor;
v1.$5;
v1.$_;
class C4 extends v1 {
}
const v5 = new C4();
try { v5.compile(v1); } catch (e) {}
gc();
