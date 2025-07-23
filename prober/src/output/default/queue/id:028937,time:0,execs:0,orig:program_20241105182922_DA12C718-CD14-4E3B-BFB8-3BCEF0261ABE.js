const v2 = [3n,3n];
function f3() {
    const v5 = new WeakMap();
    const v7 = Symbol.toPrimitive;
    const v9 = new Uint8ClampedArray();
    v5.set(v9).set(v7, WeakMap);
}
Object.defineProperty(v2, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f3 });
const v14 = ["valueOf",3n,v2,v2,v2];
for (let v15 = 0; v15 < 5; v15++) {
    v15 ** v14;
}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();
