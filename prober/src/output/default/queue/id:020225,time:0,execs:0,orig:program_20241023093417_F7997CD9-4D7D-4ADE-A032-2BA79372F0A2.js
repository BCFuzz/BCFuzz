function f1() {
    return 2.0;
}
function f3(a4) {
    const o6 = {
    };
    const t6 = o6.constructor;
    const v8 = t6(0.8740995099219031);
    v8[Symbol.toPrimitive] = f1;
    return v8.toPrecision(v8);
}
Object.defineProperty(Array, "toString", { configurable: true, enumerable: true, value: f3 });
const v12 = Array();
v12[1] = Array;
v12.join();
gc();
