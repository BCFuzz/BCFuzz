class C1 {
}
class C2 extends C1 {
}
Object.defineProperty(C1, 2, { value: NaN });
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    function f13(a14, a15) {
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
            ([-500523833,-9223372036854775807,-128]).splice(i18, i19);
        }
        return i5;
    }
    f13(C2, C1);
}
gc();
