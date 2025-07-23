class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
function f3(a4, a5) {
    return a5;
}
v2.constructor = f3;
v2.subarray();
gc();
