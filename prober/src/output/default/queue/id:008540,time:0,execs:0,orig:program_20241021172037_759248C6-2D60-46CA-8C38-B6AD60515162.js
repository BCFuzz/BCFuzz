function f1() {
    return f1;
}
const v2 = Symbol.constructor;
function f3(a4, a5) {
    return a4;
}
Object.defineProperty(v2, 0, { enumerable: true, get: f1, set: f3 });
function f6(a7, a8) {
    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        Int16Array.from([1.6860289375747012e+308]);
    }
    return v2;
}
for (let i = 0; i < 100; i++) {
    f6(f6, f6);
}
gc();
