const v0 = [];
function f1() {
    return f1;
}
Object.defineProperty(v0, 1, { configurable: true, enumerable: true, get: f1 });
new Int8Array(v0);
gc();
