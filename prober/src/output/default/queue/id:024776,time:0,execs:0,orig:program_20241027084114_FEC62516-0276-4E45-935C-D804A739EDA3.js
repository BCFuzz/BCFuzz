const v1 = /Qcn7/mgi;
function f2() {
    return f2;
}
function f3() {
    WeakSet();
    return WeakSet;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(f2, "next", { enumerable: true, get: f3, set: f5 });
v1[Symbol.iterator] = f2;
try { new WeakSet(v1); } catch (e) {}
gc();
