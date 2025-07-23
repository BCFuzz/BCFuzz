const v2 = new Uint8ClampedArray(Symbol, Uint8ClampedArray, Uint8ClampedArray);
function f3(a4) {
    return v2;
}
const v5 = Symbol.species;
f3[v5] = v5;
v2.constructor = f3;
try { v2.slice(); } catch (e) {}
gc();
