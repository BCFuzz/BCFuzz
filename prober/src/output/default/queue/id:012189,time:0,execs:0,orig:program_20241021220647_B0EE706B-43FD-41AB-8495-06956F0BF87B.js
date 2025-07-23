function f0(a1, a2, a3, a4) {
    const v5 = /a\nW/vgi;
    function f6(a7, a8, a9, a10) {
        a7.exec(a10);
        try { a9(); } catch (e) {}
        const v13 = a7.toString();
        try { v13.substring(); } catch (e) {}
        for (const v16 of v13.link(f6)) {
        }
        const o22 = {
            [a7](a18, a19, a20, a21) {
            },
        };
        return v5;
    }
    try { f6(a4, v5, f0, a3); } catch (e) {}
    return f6(v5);
}
f0();
f0();
gc();
