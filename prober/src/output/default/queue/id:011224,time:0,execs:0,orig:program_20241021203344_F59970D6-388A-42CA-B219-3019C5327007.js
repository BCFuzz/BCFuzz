const v0 = [];
function f1() {
    return f1;
}
function f2(a3) {
    return a3;
}
Object.defineProperty(v0, 115, { configurable: true, get: f1, set: f2 });
new Int16Array(v0);
gc();
