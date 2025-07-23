function f1() {
    return Symbol;
}
const v2 = Symbol.constructor;
function f3(a4, a5) {
    return a4;
}
Object.defineProperty(v2, 0, { enumerable: true, get: f1, set: f3 });
for (let v6 = 0; v6 < 2500; v6++) {
    const v8 = new Float64Array();
    this.constructor.getOwnPropertySymbols(v8);
}
gc();
