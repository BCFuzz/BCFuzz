const v0 = [0.0,617.6064317343598,-5.586581780375731e+307,1.0,0.007238116212872403];
const v1 = `
    const v2 = [v1];
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        let v7 = a6.search(v2);
        const v8 = v7--;
        v8 | v8;
    }
    new F3(v1, v1);
    /\u{12345}/myvis;
    v0.b = v0;
    function F12(a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        function F17() {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
`;
eval(v1);
gc();
