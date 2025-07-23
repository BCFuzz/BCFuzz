const o0 = {
};
function f1(a2, a3, a4) {
    return a4.constructor.caller;
}
try { f1(f1, o0, o0); } catch (e) {}
gc();
