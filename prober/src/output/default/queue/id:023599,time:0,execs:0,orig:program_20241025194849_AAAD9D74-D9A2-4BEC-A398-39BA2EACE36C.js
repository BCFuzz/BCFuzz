const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v1, v1);
function f4(a5, a6) {
    return a6;
}
function f7() {
    return v2;
}
Object.defineProperty(f4, Symbol.species, { configurable: true, enumerable: true, get: f7 });
v3.constructor = f4;
v3.slice();
gc();
