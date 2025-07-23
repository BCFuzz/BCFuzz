const v3 = new Int32Array(681);
function f5() {
    class C6 {
    }
    const v7 = `
        var b = C6;
    `;
    eval(v7);
}
Float32Array[Symbol.toPrimitive] = f5;
function f12(a13, a14, a15, a16) {
    Float32Array >>> -4294967297;
    return a14;
}
v3.map(f12);
gc();
