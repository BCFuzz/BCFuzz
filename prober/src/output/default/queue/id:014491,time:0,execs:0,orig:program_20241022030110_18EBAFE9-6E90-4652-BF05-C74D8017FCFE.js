const v0 = `
    let v1 = 0;
    while ((() => {
            const v3 = v1 < 5;
            class C4 {
            }
            return v3;
        })()) {
        v1++;
    }
    new Set();
    [0.7701298545109573,4.567618658668895,285894.17902074615,-1.7976931348623157e+308,1.0];
    const v9 = [1000000000000.0,0.23145500256445228];
    [1.7976931348623157e+308,38188.97880132636,-1.6244705851206299e+308,1.690984258861467e+308,-2.0];
    function f11() {
        return Set;
    }
    function f12() {
        return v9;
    }
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const o15 = {
    };
    class C16 {
    }
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f23() {
        return F13;
    }
    function f24() {
    }
    function f25() {
        return v0;
    }
    class C26 extends f23 {
        constructor(a28, a29, a30, a31) {
        }
    }
    const v34 = new Float64Array(257);
    for (const v35 of v34) {
        const v36 = new Float64Array(Float64Array);
        const v38 = new Uint16Array();
        const v39 = new C16();
        v39[Symbol.iterator] = f12;
        try { v36(...v38, ...v38, ...v39); } catch (e) {}
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
