function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        return a7;
    }
    this[Symbol.toPrimitive] = f6;
}
function f10() {
    return f10;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(F0, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f10, set: f11 });
const v15 = new F0(Symbol, F0, Symbol, F0);
const t15 = v15.constructor;
new t15();
const v18 = v15.constructor;
v18.prototype = v18;
new v18(v15, f10, v15, Symbol, f10);
gc();
