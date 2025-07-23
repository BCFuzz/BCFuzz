function f1(a2, a3) {
    return Uint8ClampedArray;
}
Uint8ClampedArray[Symbol.toPrimitive] = f1;
const v6 = new Uint8ClampedArray(Symbol, Symbol, f1);
try { v6.with(Uint8ClampedArray); } catch (e) {}
gc();
