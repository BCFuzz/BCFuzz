function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o12 = {
    valueOf(a4) {
        if (!(undefined < this)) {
            ([-268435456]).keys;
            Reflect.construct();
            function f10() {
                return f10;
            }
            class C11 extends f10 {
            }
        }
        return F0;
    },
};
class C13 extends F0 {
    constructor(a15, a16, a17) {
        super();
        try { o12.valueOf(); } catch (e) {}
    }
}
new C13(F0, undefined, undefined);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
