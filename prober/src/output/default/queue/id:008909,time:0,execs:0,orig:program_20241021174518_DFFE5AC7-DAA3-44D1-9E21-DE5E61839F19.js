let v1 = 1739;
function f2() {
    try { arguments.callee(); } catch (e) {}
    v1 &= 10;
}
f2();
gc();
