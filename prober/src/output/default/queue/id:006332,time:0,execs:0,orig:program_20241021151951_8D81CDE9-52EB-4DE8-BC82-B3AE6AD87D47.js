function f2() {
    return -1.7255435816318171e+308;
}
Object.defineProperty(Uint8ClampedArray, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f2 });
const v6 = new Float64Array();
v6.slice(Uint8ClampedArray);
gc();
