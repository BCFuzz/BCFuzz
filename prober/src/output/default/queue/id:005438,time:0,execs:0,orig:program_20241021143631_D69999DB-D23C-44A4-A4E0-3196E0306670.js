class C0 {
    #p(a2, a3) {
    }
    constructor(a5) {
        for (let i8 = 0, i9 = 10;
            i8 < i9;
            (() => {
                const v13 = `
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    new F14();
                `;
                const v20 = eval(v13);
                v20.setUint32 = a5;
                try { v20.setUint32(); } catch (e) {}
                i8++;
            })()) {
        }
    }
}
const v25 = new C0(C0);
new C0(v25);
gc();
