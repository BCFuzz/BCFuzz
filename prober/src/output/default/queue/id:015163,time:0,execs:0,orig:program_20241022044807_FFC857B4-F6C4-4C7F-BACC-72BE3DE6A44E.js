function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = createGlobalObject().WebAssembly;
function f9(a10) {
    return v8;
}
Object.defineProperty(v8, "parameters", { get: F0, set: f9 });
const v11 = v8.Tag;
try { new v11(v8); } catch (e) {}
for (let i15 = -3, i16 = 10; i16--, i15 < i16;) {
}
gc();
