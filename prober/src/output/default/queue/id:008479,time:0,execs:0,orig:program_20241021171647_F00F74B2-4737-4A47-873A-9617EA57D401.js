const v1 = new SharedArrayBuffer();
function f2() {
    const v4 = [-0.0];
    v4.push(-2.2250738585072014e-308);
    v4.lastIndexOf(-2.2250738585072014e-308);
}
v1.toString = f2;
v1.slice(v1);
gc();
