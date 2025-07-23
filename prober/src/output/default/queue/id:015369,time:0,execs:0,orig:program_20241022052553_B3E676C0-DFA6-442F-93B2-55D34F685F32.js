const v0 = /[a-zA-Z0-9]/vi;
function f1() {
    const v4 = new Uint8Array(v0);
    createGlobalObject().Atomics.sub(v4, 6);
    return 6;
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a12();
}
try { new F9(v0, f1); } catch (e) {}
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
gc();
