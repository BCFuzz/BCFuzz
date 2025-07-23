function f0(a1, a2, a3, a4) {
    const v5 = /a\nW/vgi;
    function f6(a7, a8, a9, a10) {
        const v11 = a7.compile;
        try { v11(); } catch (e) {}
        const v13 = a7.toString();
        const v14 = v13.substring;
        try { v14(); } catch (e) {}
        const v16 = v13.link(f6);
        v16.split(a10);
        for (const v18 of v16) {
        }
        const o19 = {
        };
    }
    f6(v5);
    return f0;
}
const v21 = f0();
f0(f0, v21, v21, v21);
gc();
