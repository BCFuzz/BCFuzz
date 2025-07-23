function f0() {
    const o4 = {
        "b": 1.7409544192135014e+308,
        "e": 3,
        [1.7409544192135014e+308]: 1.7409544192135014e+308,
        127: -2147483648,
        ...3,
        128: -2147483648,
        "a": 1.7409544192135014e+308,
        "g": -2147483648,
        "d": 1.7409544192135014e+308,
        "f": 1.7409544192135014e+308,
    };
    o4[128] = o4;
    return o4;
}
f0();
const v6 = f0();
const v7 = f0();
try { Int16Array(v7, f0, v6); } catch (e) {}
new Int16Array(7);
try { Int8Array(f0, f0, Int8Array); } catch (e) {}
const v15 = new Int8Array(637);
const v16 = v15?.findIndex;
try { v16(Int16Array); } catch (e) {}
new Int32Array(2328);
const v22 = 8 << 8;
const v24 = createGlobalObject();
const v25 = v24?.Boolean;
try { v25(v7); } catch (e) {}
const v27 = v24.Float16Array;
try { v27(8, Int32Array, Int32Array); } catch (e) {}
const v31 = new Uint32Array(1000);
v31[330] = v31;
function f32() {
    return v22;
}
v31.toString = f32;
v31[330] = v31;
const v33 = new v27(v31);
v33[287];
for (let [i38, i39] = (() => {
        let v35 = 0;
        v35--;
        return [v35, 10];
    })();
    i39 != i39, i38 < i39;
    i39 & i39, i39--) {
}
function f48(a49) {
    const v51 = 1073741823 - a49;
    v51 % v51;
    for (let v53 = 0; v53 < 5; v53++) {
    }
    for (let v54 = 0; v54 < 250; v54++) {
    }
    const v55 = `
        const v56 = \`
            const o57 = {
            };
        \`;
        const v58 = \`
        \`;
        const v59 = v58.trimLeft;
        try { v59(v59, a49, a49, v7, 2328); } catch (e) {}
    `;
    eval(v55);
    return v51;
}
([3.6678067847652756,-3.3588036264140016e+307,5.730101676166519e+306,-1000000000.0,0.21287490118238417,-1.5994042304030588e+308,2.2250738585072014e-308,0.0]).flatMap(f48);
gc();
