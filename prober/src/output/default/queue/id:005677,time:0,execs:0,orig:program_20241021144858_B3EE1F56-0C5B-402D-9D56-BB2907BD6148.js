const v0 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v2 = Date();
const v3 = `
    for (let v4 = 0; v4 < 5; v4++) {
        const v8 = ("p" + v4).codePointAt.call(v0);
        v8 - v8;
    }
    let v10 = 128;
    const v11 = v10--;
    v11 + v11;
    for (let v13 = 0; v13 < 5; v13++) {
        v13 + v13;
        "p" + v13;
    }
    let v17 = 20;
    v17 * v17;
    v17++;
`;
try { v3.endsWith(v2); } catch (e) {}
eval(v3);
gc();
