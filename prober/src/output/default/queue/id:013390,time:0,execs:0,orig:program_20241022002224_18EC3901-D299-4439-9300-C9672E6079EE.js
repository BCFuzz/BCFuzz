const v0 = `
    for (let v2 = 0; v2 < 5; v2++) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v5 = new F3();
        const v6 = v5.constructor;
        let v7;
        try { v7 = v6(); } catch (e) {}
        const v9 = true && true;
        const v10 = new v6();
        const v11 = [v9,v9,v9,v9,v9];
        const v12 = [87765.32060755184,-661.165666017771,5.0,1e-15];
        const v13 = [-3.0,-886106.4288150007,0.9564424113985915,365031.86053190194,1.7976931348623157e+308,-2.2250738585072014e-308,-2.6012157216726095,6.795172896011355];
        const v14 = [3.0,-2.2250738585072014e-308,313.1371589142268,1000000.0,-2.672829483526099e+307,-408343.5169795669,-4.0];
        function f15(a16, a17) {
            return F3;
        }
        const v18 = f15(v12, v14);
        const v19 = f15();
        f15(v13, v11);
        const v23 = new BigInt64Array(512);
        for (const v24 in v23) {
            const o32 = {
                valueOf() {
                    v18.a = v19;
                    return v10;
                },
                m(a27, a28, a29) {
                    eval(v7);
                    return true;
                },
            };
            function f33(a34, a35) {
                return a34;
            }
            for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
            }
            function f46() {
                return f33;
            }
        }
        function F47(a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F47(F47); } catch (e) {}
        const v52 = new F47();
        v52[-2] = -50716;
        v52.a = v52;
        for (let v53 = 0; v53 < 5; v53++) {
        }
        let v54 = 0;
        try {
        const t0 = true;
        t0();
        } catch (e) {}
        v54++;
        v54 < 2;
        function f59() {
            return f59;
        }
    }
`;
eval(v0);
gc();
