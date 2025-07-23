function f1(a2, a3) {
    return -12744;
}
const v6 = new ArrayBuffer(512);
v6.valueOf = f1;
const v8 = new Uint8ClampedArray(v6);
v8.lastIndexOf(512, v6);
gc();
