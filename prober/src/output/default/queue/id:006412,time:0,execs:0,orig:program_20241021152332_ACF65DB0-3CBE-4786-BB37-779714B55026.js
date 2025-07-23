class C1 extends FinalizationRegistry {
}
const v2 = new C1(FinalizationRegistry);
const v3 = v2.constructor;
try { new v3(); } catch (e) {}
gc();
