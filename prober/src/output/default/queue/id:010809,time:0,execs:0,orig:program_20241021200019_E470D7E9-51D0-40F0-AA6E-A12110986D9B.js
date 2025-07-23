function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C3 {
    #o(a5, a6) {
    }
}
const v8 = new WeakMap();
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
    for (let v19 = 0; v19 < 25; v19++) {
        v8[i12 + "p"] = v19;
    }
}
gc();
