function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
new F4(2.2250738585072014e-308, 20200, -358839.02984071337, -9223372036854775808);
new Uint8Array(1748);
new Uint8ClampedArray(129);
new Uint32Array(44);
gc();
