const v1 = new Uint16Array();
function f2(a3, a4) {
    return a4;
}
f2[Symbol.species] = Uint16Array;
v1.constructor = f2;
v1.slice();
for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
}
gc();
