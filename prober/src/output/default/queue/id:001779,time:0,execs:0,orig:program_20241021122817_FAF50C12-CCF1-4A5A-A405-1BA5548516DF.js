function f0() {
    return f0;
}
const v1 = [f0,f0,f0,f0];
const v3 = new Int32Array();
let v4 = [1073741824,-4294967295];
v3[v4 -= v1] = f0;
gc();
