const v1 = Date(Date);
const v2 = [-0.0,1.5378950431499234e+308,-1000000000000.0];
const v3 = `
    for (let v5 = 0; v5 < 5; v5++) {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v8 = new F6();
        const v9 = v8.constructor;
        v9[Symbol.iterator] = Date;
        let v12;
        try { v12 = v9(); } catch (e) {}
        const v14 = true && true;
        const v15 = new v9();
        [v14,v14,v14,v14,v14];
        const v17 = [87765.32060755184,-661.165666017771,5.0,1e-15];
        const v18 = [-3.0,-886106.4288150007,0.9564424113985915,365031.86053190194,1.7976931348623157e+308,-2.2250738585072014e-308,-2.6012157216726095,6.795172896011355];
        [3.0,-2.2250738585072014e-308,313.1371589142268,1000000.0,-2.672829483526099e+307,-408343.5169795669,-4.0];
        function f20(a21, a22) {
            return v8;
        }
        f20();
        Symbol.iterator;
        try { v18.indexOf(-50716, v5); } catch (e) {}
        try { v1.toDateString(); } catch (e) {}
        try { v2["with"](...v17, -50716, f20, ...v9, ..."with"); } catch (e) {}
        function f29() {
            return v18;
        }
        const v31 = f20();
        const v33 = new BigInt64Array(512);
        for (const v34 in v33) {
            const o41 = {
                m(a36, a37, a38) {
                    eval(v12);
                    return v31;
                },
            };
            for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
            }
        }
        function F52(a54, a55) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F52(v14, v3); } catch (e) {}
        const v57 = new F52();
        v57.a = v15;
        function f58() {
            return F6;
        }
    }
`;
eval(v3);
gc();
