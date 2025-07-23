class C3 {
    #toString(a5, a6) {
        const o7 = {
        };
        return Proxy("n", o7);
    }
    static #f = "n";
    static #a = "match";
    static #b = "match";
}
new C3();
new C3();
const v12 = new C3();
[v12,C3,v12,-632.4163754418493,v12];
["match"];
[v12];
const v16 = `
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        function f23(a24, a25) {
            return Reflect.construct(F19, [Reflect,Reflect,Reflect,Reflect,Reflect], Float32Array);
        }
        this.constructor = f23;
        try { this.constructor(-632.4163754418493, -632.4163754418493, Float32Array, v12); } catch (e) {}
    }
    const v30 = new F19();
    try { Uint32Array(); } catch (e) {}
    [-2147483649];
    function f34(a35, a36) {
        const o39 = {
            set b(a38) {
                var g = this;
            },
        };
        return v30;
    }
    const v41 = new Uint16Array();
    v41.fill().join().replaceAll().match(f34);
    /\u{12345}/myvis;
`;
eval(v16);
gc();
