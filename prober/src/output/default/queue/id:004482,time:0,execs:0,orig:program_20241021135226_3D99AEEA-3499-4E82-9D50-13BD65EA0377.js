const v0 = [-86788.33492797031,-2.264841486018094e+307,-5.0,1000000000.0,-1.0];
const v1 = `
    let v2 = -50716;
    for (let v3 = 0; v3 < 5; v3++) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v6 = new F4();
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = v6;
        }
        const v12 = new F8();
        for (let v13 = 0; v13 < 5; v13++) {
        }
        let v14 = 0;
        do {
            try {
            const t0 = true;
            t0();
            } catch (e) {}
            v12[-2];
            v14++;
        } while (v14 < 2)
    }
    const v20 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C21 {
        static p(a23, a24, a25) {
            const o26 = {
            };
            o26.b = a23;
            const o27 = {
            };
            const o28 = {
            };
            const o29 = {
            };
        }
        static #e = v20;
    }
    -(++v2);
`;
eval(v1);
const v37 = new Uint8ClampedArray(129);
const v40 = new Float64Array(2);
v37[-2] <<= -30522;
const v43 = new Int16Array(165);
try { FinalizationRegistry(v40, v43, Float64Array, v43, Float64Array, v40, v0, FinalizationRegistry); } catch (e) {}
const v47 = new Uint32Array();
const v48 = `
`;
const v50 = eval(v48);
try { v50.from(v47); } catch (e) {}
gc();
