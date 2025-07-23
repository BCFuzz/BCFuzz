class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 5; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        a = v1;
        eval();
    }
    new F3();
}
gc();
