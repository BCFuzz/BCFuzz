const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
class C2 {
}
function f3() {
    return f3;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(C2, 3, { enumerable: true, get: f3, set: f4 });
function f7(a8, a9, a10) {
    Object.defineProperty(a9, 3, { enumerable: true, value: v1 });
    return f7;
}
try { f7(65536, C2); } catch (e) {}
gc();
