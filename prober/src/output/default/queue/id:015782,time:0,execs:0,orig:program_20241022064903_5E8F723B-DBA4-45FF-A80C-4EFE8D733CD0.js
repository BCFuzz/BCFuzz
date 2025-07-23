class C1 extends WeakSet {
    constructor(a3, a4) {
        super();
        const v5 = `
            function f6(a7, a8, a9) {
                return a7;
            }
        `;
        createGlobalObject();
        for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
        }
        eval(v5);
    }
}
new C1(WeakSet, C1);
gc();
