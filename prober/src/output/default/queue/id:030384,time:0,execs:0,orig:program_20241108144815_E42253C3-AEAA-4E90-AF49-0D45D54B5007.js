class C0 {
}
const v1 = new C0();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = a4--;
    for (let v6 = 0; v6 < 5; v6++) {
        for (let i10 = -3, i11 = 10; i10 **= v5, -13369 < i11; i11--) {
            v6 /= i11;
        }
    }
}
new F2(v1);
gc();
