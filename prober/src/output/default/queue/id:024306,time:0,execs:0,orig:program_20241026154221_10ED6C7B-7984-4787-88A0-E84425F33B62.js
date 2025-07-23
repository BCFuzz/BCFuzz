function f1() {
    function f3() {
        return f1;
    }
    for (const v5 of [-5.0,-5.732518605507154e+307,-1.7976931348623157e+308,-7.707478463508556e+307,-1000000000000.0,-1000.0]) {
    }
    Object.defineProperty(Float64Array, Symbol.toPrimitive, { configurable: true, get: f3 });
    Float64Array >>> -12;
}
([-44525,10]).flatMap(f1);
const v12 = new Float64Array();
v12["subarray"]();
gc();
