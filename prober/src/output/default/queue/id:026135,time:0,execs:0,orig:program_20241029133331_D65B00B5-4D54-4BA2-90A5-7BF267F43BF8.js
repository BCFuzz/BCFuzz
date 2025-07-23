function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
v5[Symbol.toPrimitive] = Date;
class C9 {
    constructor(a11) {
        this.collation = v5;
        try { ("FR0X").localeCompare(a11, a11, this); } catch (e) {}
    }
}
new C9();
gc();
