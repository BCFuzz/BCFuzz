class C0 {
}
function f1(a2, a3) {
    const v4 = `
        this.decodeURIComponent(/\u{12345}/myvis);
    `;
    eval(v4);
    return a3;
}
C0.toString = f1;
for (let v10 = 0; v10 < 5; v10++) {
    const v13 = ("p" + v10).replace();
    try { v13.slice(C0); } catch (e) {}
}
gc();
