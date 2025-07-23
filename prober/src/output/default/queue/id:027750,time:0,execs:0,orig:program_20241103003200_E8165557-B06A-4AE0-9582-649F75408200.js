function f2() {
    return 4;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(BigUint64Array, 1, { enumerable: true, get: f2, set: f3 });
const v6 = new Uint8Array(BigUint64Array);
const v8 = [4];
Reflect.apply(v6.lastIndexOf, v6, v8);
gc();
