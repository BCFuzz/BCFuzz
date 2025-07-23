class C0 {
}
class C1 extends C0 {
}
function f2() {
    const v4 = new C1(9);
    const v5 = v4.constructor;
    new v5(v5);
    const v9 = new Float32Array(3923);
    for (const v10 in v9) {
    }
    return v4;
}
f2();
gc();
