const v3 = new Uint8ClampedArray(128);
function f4() {
    const v6 = new Uint32Array(4003);
    return v6;
}
Object.defineProperty(f4, Symbol.species, { configurable: true, enumerable: true, value: f4 });
v3.constructor = f4;
v3["slice"]();
gc();
