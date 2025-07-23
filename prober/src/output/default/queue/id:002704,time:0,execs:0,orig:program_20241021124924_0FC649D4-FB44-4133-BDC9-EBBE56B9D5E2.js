const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = WeakSet;
}
const v6 = new F2(v1, F2);
class C7 extends F2 {
    constructor(a9, a10, a11) {
        super();
        a10[Symbol.hasInstance];
    }
}
const v15 = new C7(v1, v6);
new C7(v6, v15);
new C7(v6, C7);
v6.f *= -35644;
gc();
