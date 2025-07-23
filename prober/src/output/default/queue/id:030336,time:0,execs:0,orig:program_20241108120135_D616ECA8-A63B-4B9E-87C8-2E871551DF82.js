class C0 {
    p(a2) {
        function f4() {
            return this;
        }
        function f5(a6) {
            let v8 = Float64Array;
            let v9 = 8;
            let v10 = "source";
            [v8,v9,v10] = v10;
            const v11 = `
                do {
                    "unscopables" / undefined;
                } while (0 != 6)
            `;
            return v11.split(v9);
        }
        f4.toString = f5;
        eval(([[536870912n,f4]]).toLocaleString());
    }
}
class C23 extends C0 {
    constructor(a25, a26, a27) {
        super();
        try { this.p(); } catch (e) {}
    }
}
new C23(C23, C23, C23);
gc();
