const v2 = new Uint8ClampedArray(9);
function f3() {
    return 6;
}
v2[Symbol.toPrimitive] = f3;
eval(v2.join(v2));
gc();
