let v0 = 9;
function f2() {
    const v3 = --v0;
    const v4 = v3 % v3;
    const v5 = v4 || v4;
    "bigint" ** (v5 || v5);
    return f2;
}
const v10 = new Uint32Array(4046);
v10.filter(f2);
gc();
