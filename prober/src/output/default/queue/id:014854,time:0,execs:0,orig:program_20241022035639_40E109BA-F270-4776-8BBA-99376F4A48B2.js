const v1 = new Uint8ClampedArray();
const v2 = [Uint8ClampedArray,Uint8ClampedArray,Uint8ClampedArray];
function f3(a4) {
    Object.defineProperty(a4, 5, { configurable: true, enumerable: true, value: v2 });
    return a4;
}
try { f3(v1); } catch (e) {}
gc();
