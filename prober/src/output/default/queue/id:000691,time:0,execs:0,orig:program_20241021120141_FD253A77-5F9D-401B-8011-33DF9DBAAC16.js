function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1();
class C5 extends F1 {
    constructor(a7, a8) {
        super();
        for (let i = 0; i < 5; i++) {
            a7[536870888] = WeakMap;
        }
    }
}
const v9 = new C5(v4);
new C5(v9);
gc();
