const v1 = [13,8,3,-1447235540,8,5];
function f4() {
    return 4294967296 - (((v1 % --f4) << -65536) & 255);
}
const v12 = new Uint32Array(4046);
v12.reduce(f4);
gc();
