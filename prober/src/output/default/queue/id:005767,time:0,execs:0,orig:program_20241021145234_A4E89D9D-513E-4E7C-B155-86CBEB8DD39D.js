const v1 = `
    const v3 = new Map();
    const v4 = v3.has;
    let v5;
    try { v5 = v4(); } catch (e) {}
    function f6() {
    }
    for (let v7 = 0; v7 < 5; v7++) {
        const v10 = ("p" + v7).codePointAt;
        try { v10.apply(); } catch (e) {}
        let v12;
        try { v12 = v10.call(); } catch (e) {}
        v12 - v12;
        try { v10(); } catch (e) {}
    }
    let v15 = 128;
    v15 / v15;
    const v17 = v15--;
    v17 + v17;
    const v20 = new Float64Array(v15, v17, v5);
    let v21;
    try { v21 = v20.findLast(v4, v5); } catch (e) {}
    function f22() {
        return v21;
    }
    for (let v23 = 0; v23 < 5; v23++) {
        "p" + v23;
    }
    try { Map(v4); } catch (e) {}
    const v27 = new Map();
    const v28 = v27.values;
    try { v28(); } catch (e) {}
    let v31;
    try { v31 = Uint8ClampedArray.from(); } catch (e) {}
    let v33 = 9;
    const v34 = new Uint8Array();
    v33 /= 257;
    for (const v35 in v31) {
        v33 - v35;
        v33[9] = v35;
        try { v34.indexOf(v35, Uint8Array); } catch (e) {}
        Date();
    }
    eval();
    for (let v42 = 0; v42 < 5; v42++) {
        -v42;
    }
`;
const t48 = eval.constructor;
t48();
eval(v1);
const o48 = {
};
gc();
