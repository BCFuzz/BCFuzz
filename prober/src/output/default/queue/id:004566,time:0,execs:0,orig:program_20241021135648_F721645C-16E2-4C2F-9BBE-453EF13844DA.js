function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3 ^ a3;
}
F1.d = F1;
new F1(-2147483649);
class C6 {
}
class C7 extends C6 {
}
for (let v8 = 0; v8 < 250; v8++) {
    v8++;
    v8--;
}
gc();
