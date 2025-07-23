const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        const v13 = [-12,16,-438812569,-26217,-1084004322,178099629,33057];
        const v16 = 9 + 9;
        const v17 = v16 * v16;
        const o22 = {
            toString(a19) {
                try { a19.toString(152); } catch (e) {}
                a19.toString(v13);
                return a12;
            },
        };
        try { o22.toString(v17); } catch (e) {}
        o22.toString(o22);
    }
    new F9(f4, F9);
    return Int32Array;
}
v3.map(f4);
gc();
