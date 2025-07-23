const v0 = `
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        [3.0,-2.220446049250313e-16,-2.2250738585072014e-308,-1.7976931348623157e+308,-210.40490611640155,-48858.55995689158,1e-15];
    }
    try { ("Mtdop").search(F1); } catch (e) {}
    /\u{12345}/myvis;
`;
eval(v0);
gc();
