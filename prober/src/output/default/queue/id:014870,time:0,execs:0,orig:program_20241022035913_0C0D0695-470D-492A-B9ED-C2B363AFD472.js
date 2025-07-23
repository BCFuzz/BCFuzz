let v2 = 29506;
const v3 = [5,9007199254740991,-5902,1,8615,-13,25703];
const v4 = v3[6];
const v5 = `
    const o6 = {
    };
    o6.e = o6;
    const v9 = "bigint" == "bigint";
    v9 && v9;
    let v12 = Array.from("bigint");
    const o13 = {
    };
    o13.b = o13;
    let v14;
    try { v14 = Uint32Array(); } catch (e) {}
    try { v14.sort(127); } catch (e) {}
    let v16;
    try { v16 = v14.indexOf(v14); } catch (e) {}
    v16 !== v16;
    const v19 = [Reflect,Reflect,Reflect,Reflect];
    try { v19.toLocaleString(); } catch (e) {}
    v2 += v4;
    -Infinity;
    let v22 = -1.0;
    v22--;
    v12 &&= v14;
    v19[2];
    const v25 = Reflect.construct(Uint32Array, v19);
    try { v25.sort(o6); } catch (e) {}
    try { v25.sort("Fe"); } catch (e) {}
    const v28 = v25.reverse();
    try { v28.sort(Array); } catch (e) {}
    v28.e = v28;
    const v30 = /\u{12345}/myvis;
    try { v30.toString(); } catch (e) {}
    const o32 = {
    };
    const v33 = o32.constructor;
    let v34;
    try { v34 = v33.toString(); } catch (e) {}
    try { v34.endsWith(v3); } catch (e) {}
    for (let v36 = 0; v36 < 5; v36++) {
        42 ^ 42;
    }
`;
eval(v5);
gc();
