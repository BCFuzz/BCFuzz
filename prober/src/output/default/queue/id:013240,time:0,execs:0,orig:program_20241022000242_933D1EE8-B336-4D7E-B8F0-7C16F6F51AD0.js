const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        arguments[9] = i11;
    }
    return arguments;
}
v2.map(f3);
gc();
