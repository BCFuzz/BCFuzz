let v0 = -65536;
const v2 = 4294967296 >>> 4294967296;
function f3() {
    const v6 = ((v0 % v2) << v0) + 4294967296;
    v6 - v6;
    v0++;
    return v6;
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
