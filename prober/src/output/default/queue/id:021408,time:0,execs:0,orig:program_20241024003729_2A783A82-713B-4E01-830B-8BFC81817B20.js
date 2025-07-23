let v0 = 1024;
let v1 = v0++;
const v2 = v1--;
const v5 = new Int16Array(4096);
function f6(a7, a8) {
    for (const v9 of v5) {
    }
    const v11 = 255 && a7;
    let v12 = v11 / v11;
    (v12 ^= v2) * v12;
    return v1;
}
f6(4096);
gc();
