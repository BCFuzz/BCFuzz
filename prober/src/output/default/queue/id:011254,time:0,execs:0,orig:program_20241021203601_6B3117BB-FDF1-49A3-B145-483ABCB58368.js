class C0 {
}
function f1() {
    const v4 = createGlobalObject().Atomics;
    v4.compareExchange(v4, v4, C0, C0);
    return v4;
}
try { f1.call(C0, C0, f1); } catch (e) {}
gc();
