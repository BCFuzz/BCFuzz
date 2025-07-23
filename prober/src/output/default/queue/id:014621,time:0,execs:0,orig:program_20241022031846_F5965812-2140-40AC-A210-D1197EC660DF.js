const v1 = new Set();
function f2() {
    for (const v3 of v1) {
    }
    return f2;
}
const v6 = new Uint32Array(4046);
v6.reduce(f2);
gc();
