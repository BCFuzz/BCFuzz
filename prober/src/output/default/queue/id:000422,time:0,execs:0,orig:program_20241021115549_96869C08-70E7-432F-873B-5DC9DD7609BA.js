function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4) {
        super();
        `4${a4}unshift`;
    }
}
new C2();
gc();
