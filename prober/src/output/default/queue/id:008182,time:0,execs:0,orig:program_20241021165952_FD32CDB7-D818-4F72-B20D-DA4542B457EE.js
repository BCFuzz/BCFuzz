const o0 = {
};
function f1(a2) {
    return o0;
}
Object.defineProperty(o0, "constructor", { value: f1 });
function f3(a4, a5, a6) {
    Object.defineProperty(a6, "constructor", { writable: true, value: f3 });
    return a4;
}
try { f3(f3, o0, o0); } catch (e) {}
gc();
