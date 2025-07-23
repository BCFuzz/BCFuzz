function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5 % a5;
}
new F0(F0, F0, F0, F0);
class C8 {
}
class C9 extends C8 {
}
class C10 extends C8 {
}
for (let v11 = 0; v11 < 250; v11++) {
    v11++;
    v11--;
}
gc();
