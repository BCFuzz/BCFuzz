const v2 = new Int16Array(7);
function f4() {
    const v6 = new Uint32Array(4003);
    return v6;
}
Object.defineProperty(Int16Array, Symbol.species, { configurable: true, enumerable: true, value: f4 });
v2["slice"]();
gc();
