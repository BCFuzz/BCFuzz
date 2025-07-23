const v2 = new Float64Array(Float64Array);
v2["subarray"]();
function f6(a7) {
    Object.defineProperty(v2, 1667, { get: undefined });
    return Float64Array;
}
ArrayBuffer.constructor = f6;
const v8 = ArrayBuffer.constructor;
try { v8(); } catch (e) {}
gc();
