function f0(a1, a2) {
    return a1;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F3(F3);
v6[9007199254740991] = f0;
const v8 = ("9007199254740991").toLocaleLowerCase();
v8.sup();
v6[v8];
for (let i13 = 0, i14 = 57742; i13 < i14; i14--) {
}
gc();
