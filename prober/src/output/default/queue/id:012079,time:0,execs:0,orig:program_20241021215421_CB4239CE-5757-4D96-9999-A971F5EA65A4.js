const v1 = new Uint8ClampedArray();
function f2(a3) {
    a3(v1, a3, a3, Uint8ClampedArray, f2);
    return a3;
}
v1.valueOf = f2;
const t6 = createGlobalObject().Float16Array;
const v9 = new t6();
try { v9.copyWithin(undefined, v1); } catch (e) {}
gc();
