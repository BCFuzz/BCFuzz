class C0 {
    constructor(a2, a3) {
        const v4 = `
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v4);
    }
}
const v11 = new C0();
for (let v14 = 0; v14 < 25; v14++) {
    function F15() {
        if (!new.target) { throw 'must be called with new'; }
        function f17(a18) {
            new Float64Array(58766);
            return v11;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f17 });
        this.c = -256;
    }
    new F15();
    new F15();
    new F15();
}
gc();
