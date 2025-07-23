function f1() {
    Math.tan(Uint8ClampedArray);
}
Uint8ClampedArray[Symbol.toPrimitive] = f1;
Uint8ClampedArray[2] = Uint8ClampedArray;
try { Int32Array.from(Uint8ClampedArray); } catch (e) {}
gc();
