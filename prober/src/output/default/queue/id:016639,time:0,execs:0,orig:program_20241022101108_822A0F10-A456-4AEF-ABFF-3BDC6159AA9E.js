const v0 = [13,8,3,-1447235540,8,5];
function f3() {
    const v4 = --f3;
    return 4294967296 - (((v0 % v4) << -65536) & v4);
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
