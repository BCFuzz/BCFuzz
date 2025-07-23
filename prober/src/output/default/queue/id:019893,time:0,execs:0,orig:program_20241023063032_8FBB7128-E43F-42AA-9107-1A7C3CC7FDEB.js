const v2 = new Uint8Array(2185);
const v5 = createGlobalObject().Float16Array;
const v6 = new v5(v5);
function f7(a8, a9) {
    return v6;
}
function f10() {
    function f11(a12) {
        return v2;
    }
    return f11;
}
Object.defineProperty(f7, Symbol.species, { configurable: true, enumerable: true, get: f10 });
v6.constructor = f7;
v6.slice();
gc();
