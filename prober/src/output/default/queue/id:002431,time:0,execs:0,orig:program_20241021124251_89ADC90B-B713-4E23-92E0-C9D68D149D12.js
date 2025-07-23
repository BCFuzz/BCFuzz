class C1 {
}
const v2 = new C1();
const v5 = [v2,-4096,[10n,10n,10n,10n,10n],10n];
try { new Int16Array(v5); } catch (e) {}
gc();
