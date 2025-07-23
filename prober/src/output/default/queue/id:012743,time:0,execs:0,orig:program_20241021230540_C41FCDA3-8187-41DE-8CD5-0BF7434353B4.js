const o10 = {
    n(a1) {
        const v2 = `
            function f3() {
                const v4 = /az\p{Script_Extensions=Greek}?/mygu;
                this.constructor.preventExtensions(v4);
                return a1;
            }
        `;
        eval(v2);
        return eval;
    },
};
try { o10.n(o10, o10, o10, o10); } catch (e) {}
gc();
