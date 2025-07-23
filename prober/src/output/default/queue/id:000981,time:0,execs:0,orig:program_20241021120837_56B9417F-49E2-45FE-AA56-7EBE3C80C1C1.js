function f0() {
}
function f1() {
    return f0;
}
const v3 = new Int16Array();
const v6 = new Float64Array(257);
const v8 = new Int8Array();
v3[f0] = v8;
for (const v9 of v6) {
    for (let v10 = 0; v10 < 10; v10++) {
        f1();
    }
}
gc();
