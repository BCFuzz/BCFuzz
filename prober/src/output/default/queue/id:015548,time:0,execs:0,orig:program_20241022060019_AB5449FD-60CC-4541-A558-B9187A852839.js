function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v2 = 0; v2 < 100; v2++) {
    const v3 = /a\nW/vgi;
    function f4(a5, a6, a7, a8) {
        a5.exec(a8);
        return f4;
    }
    f4.exec = F0;
    const v10 = f4(v3);
    try { v10(f4); } catch (e) {}
}
gc();
