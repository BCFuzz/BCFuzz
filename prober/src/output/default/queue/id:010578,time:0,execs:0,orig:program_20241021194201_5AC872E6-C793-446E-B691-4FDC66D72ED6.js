for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10() {
    try { arguments.callee(); } catch (e) {}
    return f10;
}
f10();
gc();
