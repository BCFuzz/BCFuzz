const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = a6[242];
    v8 / v8;
    return a7;
    arguments.valueOf = f3;
    return arguments;
}
v2.map(f3);
const v12 = new Int32Array();
const v13 = v12.subarray();
for (let i = 0; i < 100; i++) {
    function f14(a15, a16, a17, a18) {
        return v13;
    }
    v13.map(f14);
}
gc();
