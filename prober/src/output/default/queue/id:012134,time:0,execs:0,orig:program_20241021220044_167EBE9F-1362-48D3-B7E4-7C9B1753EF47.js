const v0 = [1000000000000.0,-1e-15,-5.059066740687057,533526.0588300249,NaN];
function f1() {
    return v0.push();
}
for (let v3 = 0; v3 < 10; v3++) {
    const v6 = new Uint8ClampedArray(v3, v3, 1000);
    v6.toString = f1;
    v6 | 1000;
}
gc();
