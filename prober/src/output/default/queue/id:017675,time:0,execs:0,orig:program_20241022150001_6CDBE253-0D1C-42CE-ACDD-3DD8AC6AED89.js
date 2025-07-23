class C1 {
}
const v2 = C1.constructor;
try { v2("for"); } catch (e) {}
gc();
