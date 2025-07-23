const v0 = /a\nW/vgi;
function f1(a2, a3, a4, a5) {
    const v8 = a2.toString(a3, a5, v0).link(a5, v0).toLocaleUpperCase;
    let v9;
    try { v9 = v8(); } catch (e) {}
    return v9;
}
f1(v0);
gc();
