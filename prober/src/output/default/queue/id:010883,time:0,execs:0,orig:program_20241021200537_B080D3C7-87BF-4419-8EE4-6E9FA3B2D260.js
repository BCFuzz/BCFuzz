function f0() {
    return f0;
}
function f1(a2, a3) {
    a2(f0);
    return f1;
}
for (let i = 0; i < 5; i++) {
    f1(f1, f1);
}
class C6 {
}
class C7 extends C6 {
}
for (let v8 = 0; v8 < 250; v8++) {
    v8++;
    v8--;
}
gc();
