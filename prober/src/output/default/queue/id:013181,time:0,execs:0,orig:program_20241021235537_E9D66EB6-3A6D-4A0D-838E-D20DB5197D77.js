const v0 = [];
function f1() {
    return v0;
}
function f2(a3) {
    return a3;
}
Object.defineProperty(v0, 1, { configurable: true, enumerable: true, get: f1, set: f2 });
this.constructor.freeze(v0);
gc();
