function f1() {
    return 22255;
}
Object.defineProperty(String.prototype, 22255, { configurable: true, enumerable: true, value: f1 });
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new Int32Array(209);
    const v11 = [f1,f1,f1,f1];
    const v13 = [];
    Reflect.apply(v11.toSorted, v10, v13);
}
new F4();
gc();
