function f1() {
    return Symbol;
}
const v2 = Symbol.constructor;
function f3(a4, a5) {
    return a5;
}
Object.defineProperty(v2, 0, { enumerable: true, get: f1, set: f3 });
const v6 = [0.0,5.0];
createGlobalObject().Float16Array.from(v6);
gc();
