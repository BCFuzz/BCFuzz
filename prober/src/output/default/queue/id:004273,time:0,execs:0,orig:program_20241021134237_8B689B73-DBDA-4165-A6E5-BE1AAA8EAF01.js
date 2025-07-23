const o0 = {
};
function f1(a2, a3) {
    Object.defineProperty(o0, "c", { configurable: true, set: a2 });
    return o0;
}
Object.defineProperty(o0, "valueOf", { writable: true, enumerable: true, value: f1 });
try { o0["valueOf"]("valueOf"); } catch (e) {}
gc();
