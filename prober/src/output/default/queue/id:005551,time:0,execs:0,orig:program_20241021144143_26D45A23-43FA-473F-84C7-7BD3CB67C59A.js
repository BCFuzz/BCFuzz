const v4 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v7 = `
    new Float32Array(7);
    for (let v11 = 0; v11 < 5; v11++) {
        ("p" + v11).codePointAt.call(v4);
    }
    const v18 = new Float64Array(128);
    try { v18.findLast(1024); } catch (e) {}
    const v21 = new Uint8Array(2165);
    try { Int16Array.apply(true); } catch (e) {}
    Int8Array[2] = BigUint64Array;
    [1535927747,-3775,257,1,7];
    (-1376237409).f;
    let v28 = undefined;
    v28 = 20;
    53343n % 53343n;
    eval();
    const v33 = new Int8Array();
    v33.d = 1877782252;
    const t19 = "string";
    t19[3] = "string";
    class C35 {
        ["string"];
    }
    const v37 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
    const o38 = {
        119: 1000.0,
        __proto__: v37,
    };
    v21[842];
`;
eval(v7);
gc();
