class C0 {
    constructor(a2) {
        [536870912,-7451,22363,2059952993,5,4,63715];
    }
}
class C4 {
    constructor(a6, a7) {
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
            for (let i12 = 0, i13 = 10;
                i13--, i12 < i13;
                (() => {
                    const v18 = new C0();
                    const t1 = v18.constructor;
                    const v20 = new t1();
                    const v21 = v20.toString();
                    const o22 = {
                    };
                    const v23 = o22.constructor;
                    try { v23.create(v21); } catch (e) {}
                    for (let v25 = 0; v25 < 100; v25++) {
                    }
                })()) {
            }
        }
        new F8();
    }
}
const v29 = new C4();
new C4(v29, v29);
gc();
