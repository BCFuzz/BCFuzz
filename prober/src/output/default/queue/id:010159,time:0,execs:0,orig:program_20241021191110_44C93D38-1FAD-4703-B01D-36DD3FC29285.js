for (let v0 = 0; v0 < 5; v0++) {
    const v3 = new FinalizationRegistry(Int8Array);
    const v4 = v3.register;
    try { v4(v3); } catch (e) {}
}
gc();
