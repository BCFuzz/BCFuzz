const v0 = /(\xed\xb0\x80)\x01/dg;
const v1 = /\P{Decimal_Number}/giu;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
function f12() {
    return Symbol;
}
for (let v14 = 0; v14 < 5; v14++) {
    class C15 extends f12 {
        [v0] = v1;
    }
    new C15();
    new C15();
}
gc();
