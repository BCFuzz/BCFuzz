class C0 {
    constructor(a2, a3) {
        const v4 = `
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
            }
            for (let i11 = 0, i12 = 10;
                (() => {
                    let v13 = i11 < i12;
                    v13--;
                    return v13;
                })();
                ) {
            }
        `;
        eval(v4);
    }
}
new C0(C0, C0);
for (let v24 = 0; v24 < 25; v24++) {
    function F25() {
        if (!new.target) { throw 'must be called with new'; }
        function f27(a28) {
            new Float64Array(58766);
            return Float64Array;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f27 });
        this.c = -256;
    }
    new F25();
    new F25();
    new F25();
}
gc();
