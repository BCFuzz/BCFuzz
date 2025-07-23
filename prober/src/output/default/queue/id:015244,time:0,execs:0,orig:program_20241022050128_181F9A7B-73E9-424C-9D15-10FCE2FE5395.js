for (let v0 = 0; v0 < 5; v0++) {
    class C2 extends Date {
    }
    const v3 = new C2();
    const v4 = v3.getFullYear;
    try { v4(); } catch (e) {}
}
gc();
