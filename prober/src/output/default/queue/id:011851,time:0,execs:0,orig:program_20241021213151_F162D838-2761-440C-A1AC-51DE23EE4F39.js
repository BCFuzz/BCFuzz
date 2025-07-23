const v0 = [-1];
function f1() {
    return f1;
}
function f2(a3) {
    return f2;
}
Object.defineProperty(v0, 4, { enumerable: true, get: f1, set: f2 });
new Int32Array(v0);
gc();
