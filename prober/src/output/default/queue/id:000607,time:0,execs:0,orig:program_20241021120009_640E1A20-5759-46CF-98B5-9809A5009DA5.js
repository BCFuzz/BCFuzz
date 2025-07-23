function f0() {
}
const v1 = [-536870912,9,5,2147483649,12,12,58756,16];
class C2 extends f0 {
    valueOf(a4) {
        a4.__proto__ = this;
        return f0();
    }
    #e;
    constructor(a7, a8) {
        super();
        try {
            a8.#e;
        } catch(e10) {
        }
    }
}
const v11 = new C2();
new C2(v1, C2);
try { v11.valueOf(v11); } catch (e) {}
gc();
