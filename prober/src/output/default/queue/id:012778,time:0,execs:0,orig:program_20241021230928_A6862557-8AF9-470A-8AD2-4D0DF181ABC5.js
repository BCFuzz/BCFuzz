function f0(a1) {
}
function f2(a3) {
    return a3;
}
f2[Symbol.iterator] = f0;
const v8 = createGlobalObject().Float16Array;
try { new v8(f2); } catch (e) {}
gc();
