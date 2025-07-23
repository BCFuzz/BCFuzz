let v3 = /\p{Script=Greek}/mv;
function f4() {
    4294967296 - (((17975 % --v3) << 17975) >>> 16);
    return 4294967296;
}
const v12 = new Uint32Array(4046);
v12.reduce(f4);
gc();
