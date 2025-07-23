const v1 = new WeakSet();
const o2 = {
};
const v4 = new Proxy(v1, o2);
class C5 extends WeakSet {
    constructor(a7, a8) {
        super();
        const v9 = `
            let v10 = o2 != v4;
            if (v10) {
            } else {
                v10 ||= --a7;
            }
            function f12(a13, a14, a15) {
                return a13;
            }
            f12();
        `;
        eval(v9);
    }
}
new C5(C5, WeakSet);
gc();
