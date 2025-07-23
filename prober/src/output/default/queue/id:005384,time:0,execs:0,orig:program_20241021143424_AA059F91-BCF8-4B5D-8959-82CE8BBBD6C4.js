class C0 {
}
class C1 extends C0 {
}
try { JSON.parse(5, C1); } catch (e) {}
gc();
