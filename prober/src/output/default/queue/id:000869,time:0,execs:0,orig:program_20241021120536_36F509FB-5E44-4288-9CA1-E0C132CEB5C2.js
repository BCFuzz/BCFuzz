const v2 = new WeakSet();
function f3() {
    const v4 = [-5,-5];
    v4[2] = v4;
}
Object.defineProperty(v2, "toString", { configurable: true, enumerable: true, value: f3 });
Math.sinh(v2);
Math.abs(v2);
gc();
