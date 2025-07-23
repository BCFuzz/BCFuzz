const v1 = 8 << 8;
const v4 = createGlobalObject().Float16Array;
const v7 = new Uint32Array(1000);
function f8() {
    return v1;
}
v7.toString = f8;
v7[330] = v7;
new v4(v7);
gc();
