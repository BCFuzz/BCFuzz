function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
function f6() {
    return v5;
}
class C7 {
}
const v8 = new C7();
v8[Symbol.iterator] = f6;
const v13 = createGlobalObject().WebAssembly;
function f14() {
    return v8;
}
function f15(a16) {
    return C7;
}
Object.defineProperty(v13, "parameters", { get: f14, set: f15 });
const v17 = v13.Tag;
try { new v17(v13); } catch (e) {}
for (let i21 = -3, i22 = 10; i22--, i21 < i22;) {
}
gc();
