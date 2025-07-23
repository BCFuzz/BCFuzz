const v2 = new Uint8ClampedArray(1024);
function f3() {
    return f3;
}
const v4 = f3();
function f5() {
    return -1e-15;
}
v4.toString = f5;
v2.sort(f3);
gc();
