for (let i3 = 0, i4 = 10; i4--, 8 < i4;) {
}
class C13 {
}
const v14 = new C13();
function f15(a16, a17) {
    const v19 = 0 < (a16 >>> 129);
    return v19 && (v19 || v19);
}
v14.constructor = f15;
const v22 = v14.constructor;
for (let v23 = 0; v23 < 100; v23++) {
    v22();
}
gc();
