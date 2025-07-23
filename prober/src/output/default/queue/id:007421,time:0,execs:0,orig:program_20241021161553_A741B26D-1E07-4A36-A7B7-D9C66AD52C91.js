const v2 = +-4294967297;
const v4 = new Uint8ClampedArray(255, -4294967297, v2);
function f6(a7, a8) {
    return 255;
}
Int32Array.toString = f6;
v4[v2] = Int32Array;
gc();
