const v3 = new Int16Array(129);
function f4() {
    return -9;
}
v3[Symbol.toPrimitive] = f4;
function f7() {
    return v3;
}
v3.sort(f7);
gc();
