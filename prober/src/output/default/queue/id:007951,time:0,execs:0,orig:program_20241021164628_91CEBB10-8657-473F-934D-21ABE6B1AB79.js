const v2 = new Uint8ClampedArray(Symbol, Uint8ClampedArray, Uint8ClampedArray);
function f3(a4) {
    return Symbol;
}
f3[Symbol.species] = Symbol;
v2.constructor = f3;
try { v2.slice(v2); } catch (e) {}
gc();
