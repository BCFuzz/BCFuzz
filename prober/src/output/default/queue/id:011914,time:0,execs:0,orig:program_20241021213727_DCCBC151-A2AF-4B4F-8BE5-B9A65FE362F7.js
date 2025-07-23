class C0 {
}
class C1 extends C0 {
}
function f2() {
    new C1();
    const v6 = new Float32Array(3923);
    for (const v7 in v6) {
        v7.length;
    }
    return Float32Array;
}
f2();
gc();
