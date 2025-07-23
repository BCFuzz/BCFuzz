const v1 = new RangeError();
function f2() {
    return v1;
}
Object.defineProperty(v1, "buffer", { configurable: true, enumerable: true, value: f2 });
Math.sinh(v1);
gc();
