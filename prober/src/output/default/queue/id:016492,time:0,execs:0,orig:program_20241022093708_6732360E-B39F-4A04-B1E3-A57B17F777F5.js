const o1 = {
};
class C2 extends WeakSet {
    constructor(a4, a5) {
        super();
        const v6 = `
            for (const v7 in o1) {
                v7 in o1;
            }
        `;
        eval(v6);
    }
}
new C2(C2, C2);
gc();
