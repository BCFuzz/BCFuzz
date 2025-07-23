const v1 = new Uint8Array();
function f2(a3, a4, a5, a6) {
    const v7 = /a\nW/vgi;
    function f8(a9, a10, a11, a12) {
        a9.exec(a12);
        try { new a11(v1, a9); } catch (e) {}
        const v15 = a9.toString();
        try { v15.substring(); } catch (e) {}
        for (const v18 of v15.link(f8)) {
        }
        const o24 = {
            [a9](a20, a21, a22, a23) {
            },
        };
        return o24;
    }
    return f8(v7);
}
f2(Uint8Array, Uint8Array, f2, Uint8Array);
f2();
gc();
