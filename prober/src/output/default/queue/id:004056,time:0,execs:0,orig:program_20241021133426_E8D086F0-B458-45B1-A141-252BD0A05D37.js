function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = 268435441 >>> 268435441;
        let v10 = "number";
        function f12(a13, a14, a15, a16) {
            const o27 = {
                toString(a18, a19) {
                    this.__proto__.toLocaleString(a18, this, a14).fontsize(v9);
                    a19 || "8";
                    Number.isNaN(v10--);
                },
            };
            o27.toString();
            return o27;
        }
        let v29 = f12();
        for (let i = 0; i < 5; i++) {
            const v30 = f12(v29, this, "8", a2);
            -v30;
            v29 *= v30;
        }
        return a2;
    }
    f4(a2, F0, F0);
    f4();
}
new F0(F0, F0);
const v35 = new F0();
new F0();
new F0(v35, v35);
gc();
