function f0(a1, a2) {
    const v3 = `
        function F4(a6, a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10() {
                function F12(a14, a15, a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                    try { this.constructor(); } catch (e) {}
                    this.e = arguments;
                }
                new F12();
                const v20 = new F12();
                return v20;
            }
            f10();
        }
        new F4();
        new F4();
        /\u{12345}/myvis;
    `;
    return eval(v3);
}
const v27 = f0();
f0(v27, v27);
f0();
gc();
