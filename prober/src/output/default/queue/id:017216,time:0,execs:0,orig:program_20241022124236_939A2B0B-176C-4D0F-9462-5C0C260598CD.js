class C0 {
}
const v1 = new C0();
const v5 = new Int32Array(681);
function f6(a7) {
    for (let v8 = 0; v8 < 10; v8++) {
        v1["3c" + v8] = v8;
    }
    return a7;
}
Float32Array.valueOf = f6;
function f12(a13, a14, a15, a16) {
    Float32Array >>> -4294967297;
    return -4294967297;
}
v5.map(f12);
gc();
