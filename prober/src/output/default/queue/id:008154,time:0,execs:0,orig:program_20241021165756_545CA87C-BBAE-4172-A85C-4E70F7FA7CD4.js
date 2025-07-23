const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    -a4;
    return a7;
    arguments.valueOf = f3;
    return arguments;
}
f3.call();
v2.map(f3);
gc();
