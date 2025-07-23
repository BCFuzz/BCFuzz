class C0 {
    constructor(a2, a3) {
        let v4 = undefined;
        const v5 = `
            const o6 = {
            };
            function f7(a8, a9) {
                return v5;
            }
            v4 = o6;
        `;
        eval(v5);
    }
}
new C0(C0, C0);
gc();
