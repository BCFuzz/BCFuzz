class C0 {
}
const v1 = new C0();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 25; v4++) {
        for (let i7 = -3, i8 = 10; i7 < i8; i8--) {
        }
        /\p{gc=Nd}/mis.test(v1);
    }
}
new F2();
gc();
