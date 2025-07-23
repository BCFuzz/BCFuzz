const v3 = new Uint8ClampedArray(1545);
function f4() {
    return 10;
}
v3[Symbol.toPrimitive] = f4;
v3[124] = v3;
v3.includes(10);
gc();
