const v0 = `
    const v1 = /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        const o9 = {
            n(a5, a6, a7) {
                this.encodeURIComponent(v1);
                return this;
            },
        };
        const v10 = o9.n;
        v10(v1, o9, v10, v0);
    }
    class C12 extends F2 {
    }
    new C12();
`;
eval(v0);
gc();
