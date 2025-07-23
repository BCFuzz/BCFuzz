function f1() {
    const v3 = new FinalizationRegistry(FinalizationRegistry);
    v3.unregister(185);
    return 185;
}
try { f1(); } catch (e) {}
gc();
