Symbol.toPrimitive;
const v4 = new Int32Array(681);
function f5(a6, a7, a8, a9) {
    -(a6--);
    arguments.valueOf = f5;
    return arguments;
}
v4.map(f5);
gc();
