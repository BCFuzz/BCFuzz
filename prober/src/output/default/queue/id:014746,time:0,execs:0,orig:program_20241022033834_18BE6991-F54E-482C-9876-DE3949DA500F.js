class C0 {
}
const v1 = new C0();
const v4 = createGlobalObject().WebAssembly;
function f5() {
    return v1;
}
function f6(a7) {
    return v1;
}
Object.defineProperty(v4, "parameters", { get: f5, set: f6 });
const v8 = v4.Tag;
try { new v8(v4); } catch (e) {}
for (let i12 = -3, i13 = 10; i13--, i12 < i13;) {
}
gc();
