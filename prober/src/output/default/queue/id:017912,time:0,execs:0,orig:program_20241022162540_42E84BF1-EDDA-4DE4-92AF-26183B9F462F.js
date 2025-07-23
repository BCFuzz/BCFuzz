function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = new SharedArrayBuffer();
        new DataView(v7, SharedArrayBuffer, F0);
    }
    const v10 = new F4();
    return v10;
}
F0.toString = f3;
try { F0.toLocaleString(f3, F0, F0, f3, f3); } catch (e) {}
gc();
