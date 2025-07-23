function f0(a1) {
    const v4 = new Uint8Array(210);
    for (const v5 of v4) {
        class C7 {
            static #e;
        }
        C7.string = v5;
        "string" in C7;
    }
    const o9 = {
    };
    const v10 = o9.delete;
    try { v10(); } catch (e) {}
    return a1;
}
f0(f0);
f0();
gc();
