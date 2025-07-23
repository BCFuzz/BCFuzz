const v0 = `
    function f1() {
        return f1;
    }
    function f2() {
        return v0;
    }
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f5() {
        return f5;
    }
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f8(a9) {
        return f8;
    }
    for (let i11 = 0; i11 < 21768; i11++) {
    }
    function f17() {
        const o24 = {
            toString(a19, a20) {
                const t24 = [2744,-15826,53999,-4294967296,2147483648,536870889,-128,38977];
                t24[93] >>>= undefined;
            },
            get b() {
                let v23 = this;
                v23 *= v23;
                return f17;
            },
        };
        return o24;
    }
    f17().b;
    let v27 = 0;
    while ((() => {
            class C31 {
                static get e() {
                }
                static b = -1000000000.0;
                c = 2.0;
            }
            return v27 < 5;
        })()) {
        v27++;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
