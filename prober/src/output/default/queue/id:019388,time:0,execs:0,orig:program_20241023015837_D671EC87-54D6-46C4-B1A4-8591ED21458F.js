const o1 = {
};
const v3 = new Proxy(Proxy, o1);
class C4 extends WeakSet {
    constructor(a6, a7) {
        super();
        const v8 = `
            let v9 = o1 != v3;
            if (!v9) {
            } else {
                v9 ||= --a6;
            }
            function f11(a12, a13, a14) {
                return a12;
            }
            f11();
        `;
        eval(v8);
    }
}
new C4();
gc();
