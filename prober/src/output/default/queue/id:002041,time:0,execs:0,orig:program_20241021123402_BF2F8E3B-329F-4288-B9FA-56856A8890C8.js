class C2 {
    ["toString"] = "m";
}
const v3 = new C2();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try { a7.padEnd(a6); } catch (e) {}
}
new F4(v3, "m");
gc();
