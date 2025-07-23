class C2 {
    constructor(a4, a5, a6) {
        const v7 = a5.localeCompare;
        try { v7.call(); } catch (e) {}
    }
}
new C2(-4294967296, "MIN_SAFE_INTEGER");
gc();
