const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
function f2() {
    return ArrayBuffer;
}
Object.defineProperty(ArrayBuffer, Symbol.species, { configurable: true, value: f2 });
v1.slice(v1, Symbol);
gc();
