function f1() {
    return --f1;
}
const v3 = [536870912n,f1];
eval(v3.toLocaleString()).call(v3);
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
for (let i30 = 0, i31 = 10; i30 < i31--;) {
}
for (let i40 = 0, i41 = 10; i41--, i40 < i41;) {
}
for (let i50 = 0, i51 = 10; i50 < i51; i51--) {
}
gc();
