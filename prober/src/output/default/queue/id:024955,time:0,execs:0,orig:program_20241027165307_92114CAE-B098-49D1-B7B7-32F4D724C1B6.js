const v1 = new Int16Array(Int16Array, Int16Array);
function f2() {
    return v1;
}
Object.defineProperty(Int16Array, Symbol.species, { configurable: true, value: f2 });
v1.slice();
gc();
