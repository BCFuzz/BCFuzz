for (let v0 = 0; v0 < 5; v0++) {
    const v2 = new Date(v0);
    const v3 = v2.getYear;
    try { v3(); } catch (e) {}
}
gc();
