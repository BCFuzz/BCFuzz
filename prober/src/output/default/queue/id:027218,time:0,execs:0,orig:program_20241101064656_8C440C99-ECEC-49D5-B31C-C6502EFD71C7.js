function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int8Array(a2, a4, a4);
    function f7() {
        const v8 = [f7,f7,f7,f7];
        const v9 = [591270925,255,-507351579,5516,3,9007199254740991,28989,1073741824,-9223372036854775808,128];
        function f10(a11, a12) {
            function f13(a14, a15) {
                a15.indexOf(a14) | f10;
                return a15;
            }
            try { f13(); } catch (e) {}
            return f13(v9, v8).push(f7, a12, v6, v8);
        }
        const v21 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
        const v22 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
        v22.toString = f10;
        for (let v23 = 0; v23 < 10; v23++) {
            const o24 = {
                [v22]: v21,
            };
        }
        return f7;
    }
    f7();
}
new F0();
gc();
