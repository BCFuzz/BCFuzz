class C1 {
    constructor(a3) {
        const v5 = `
            switch (a3) {
                case -2080884642n:
                    /\p{gc=Nd}/mvi;
                    break;
            }
        `;
        const v7 = v5.split();
        try { v7.flatMap(eval); } catch (e) {}
    }
}
new C1(C1);
gc();
