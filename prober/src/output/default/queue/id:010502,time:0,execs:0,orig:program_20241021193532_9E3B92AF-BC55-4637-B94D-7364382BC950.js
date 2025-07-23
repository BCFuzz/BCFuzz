class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 10; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = v2;
        v1.__proto__ = this;
    }
    new F3();
}
gc();
