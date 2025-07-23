class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const o5 = {
        1073741824: v1,
    };
    return o5;
}
const v6 = f2();
const v10 = new Float32Array(3008);
for (const v11 in v10) {
    v6[0] **= 1024;
}
gc();
