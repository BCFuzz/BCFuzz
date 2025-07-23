function f0(a1, a2, a3, a4) {
    return a2;
}
function f5(a6, a7) {
}
f0[Symbol.species] = f5;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    for (let v20 = 0; v20 < 25; v20++) {
    }
    const v21 = [-500523833,-9223372036854775807,-128];
    v21.constructor = f0;
    v21.splice(i12, i13);
}
gc();
