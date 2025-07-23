function f0() {
    return f0;
}
const v2 = new Int32Array();
v2.constructor = f0;
v2["subarray"]();
gc();
