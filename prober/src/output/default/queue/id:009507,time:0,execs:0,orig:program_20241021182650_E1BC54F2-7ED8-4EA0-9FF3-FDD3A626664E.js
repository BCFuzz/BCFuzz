const v0 = [1000.0,2.2250738585072014e-308,3.0,-1.0,0.0,2.0];
const v2 = new Int16Array();
const v3 = `
    for (let v4 = 0; v4 < 5; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v7 = new F5();
        function f8(a9) {
            return a9;
        }
        v7.constructor = f8;
        const v10 = v7?.constructor;
        try { v10(); } catch (e) {}
        for (let v12 = 0; v12 < 5; v12++) {
            class C13 {
            }
            const v14 = new C13();
            v14.constructor = f8;
            const v15 = v14?.constructor;
            try { v15(); } catch (e) {}
            v14.hasOwnProperty();
        }
        for (let v18 = 0; v18 < 5; v18++) {
        }
    }
    let v19 = 61104;
    v19 & v19;
    let v21 = 4294967296;
    v21--;
    let v23;
    try { v23 = v21(...v0); } catch (e) {}
    try { v2.filter(v23); } catch (e) {}
    ++v19;
`;
eval(v3);
gc();
