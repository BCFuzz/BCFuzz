function f2(a3, a4) {
    for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
        const v17 = createGlobalObject().EvalError;
        try { v17.captureStackTrace(a4); } catch (e) {}
    }
}
Uint8ClampedArray[Symbol.toPrimitive] = f2;
const v21 = new Uint8ClampedArray(Symbol, 255, 255);
new Uint8ClampedArray([[255,v21,Uint8ClampedArray]]);
gc();
