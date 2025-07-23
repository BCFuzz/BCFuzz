class C1 {
    constructor(a3) {
        for (let v7 = 0; v7 < 32; v7++) {
            function F8() {
                if (!new.target) { throw 'must be called with new'; }
                function f10(a11) {
                    const v12 = new Float64Array(58766);
                    v12[3485];
                    return this;
                }
                Object.defineProperty(this, "c", { configurable: true, set: f10 });
                this.h = F8;
                this.c = -256;
            }
            const v15 = new F8();
            const t15 = v15.h;
            new t15();
            const v18 = new F8();
            const t18 = v18.constructor;
            new t18();
            const t20 = v18.h;
            new t20();
        }
    }
}
new C1();
gc();
