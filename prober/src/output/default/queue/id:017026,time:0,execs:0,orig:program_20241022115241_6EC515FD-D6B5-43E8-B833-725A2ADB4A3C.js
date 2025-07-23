function f0(a1) {
    const v4 = new Uint8Array(210);
    for (const v5 of v4) {
        class C7 {
            static #e;
        }
        try { C7(); } catch (e) {}
        "string" in C7;
    }
    return Uint8Array;
}
f0();
f0();
gc();
