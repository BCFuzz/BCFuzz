function f0() {
    const v2 = new FinalizationRegistry(FinalizationRegistry);
    return v2;
}
f0();
f0();
gc();
