function f1(a2) {
    const o4 = {
    };
    const t3 = o4.constructor;
    const v6 = t3(2.2250738585072014e-308);
    return v6.toExponential(v6);
}
Object.defineProperty(Array, "toString", { configurable: true, enumerable: true, value: f1 });
const v8 = Array();
v8[1] = Array;
v8.indexOf(v8, Array);
gc();
