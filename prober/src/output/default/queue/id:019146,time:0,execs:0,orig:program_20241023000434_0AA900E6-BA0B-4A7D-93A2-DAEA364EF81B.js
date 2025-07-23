function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o12 = {
    valueOf(a4) {
        if (!(undefined < this)) {
            Reflect.construct(([-268435456]).keys, this, Reflect);
            function f10() {
                return F0;
            }
            class C11 extends f10 {
            }
        }
        return undefined;
    },
};
class C13 extends F0 {
    constructor(a15, a16, a17) {
        super();
        try { o12.valueOf(F0, F0, a17, a16); } catch (e) {}
    }
}
new C13(F0, o12, F0);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
