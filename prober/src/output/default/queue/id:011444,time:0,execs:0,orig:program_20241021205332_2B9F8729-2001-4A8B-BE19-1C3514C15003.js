const v1 = 0 >> 0;
function f2() {
    try { arguments.callee(); } catch (e) {}
    arguments.e = arguments;
    arguments[v1];
    return 0;
}
f2();
gc();
