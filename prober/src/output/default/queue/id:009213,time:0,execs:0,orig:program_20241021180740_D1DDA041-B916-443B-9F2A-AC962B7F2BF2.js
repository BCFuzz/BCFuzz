const v1 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
const v4 = [v1,v1];
const v7 = `
    Map.length = Map;
    const v9 = new Map();
    v9.toString = Date;
    const v10 = v9?.has;
    let v11;
    try { v11 = v10(Map); } catch (e) {}
    function f12() {
        return Date;
    }
    f12.b = v9;
    f12.b = f12;
    v9.valueOf = f12;
    let v13 = v9 | v2;
    const v14 = v13 / v13;
    const v15 = v13++;
    let v16 = 7;
    Float32Array.length;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v19 = new Float32Array(v16, f12, v15, 4);
    for (let v20 = 0; v20 < 5; v20++) {
        const v22 = "p" + v20;
        const v23 = v22.caller;
        try { v23.apply("p", "p"); } catch (e) {}
        let v25;
        try { v25 = v23.call(v1); } catch (e) {}
        v25 - v25;
        try { v23(v19); } catch (e) {}
        v4[v22] = v20;
    }
    let v28 = 128;
    v28 / v28;
    const v30 = v28--;
    v30 + v30;
    const v33 = new Float64Array(v28);
    try { v33.findLast(1024, v9); } catch (e) {}
    new Float32Array(1000);
    const v38 = [1000.0,-2.0,-4.5375773736602865,-1000.0,-2.0,2.0,-1e-15,-5.0,1000000.0,4.0];
    const v39 = [2.220446049250313e-16,-4.0,-1000.0,657140.3525822416,958347.6412257543,-5.978375099456885,-9.212700087603533,1000000000000.0,1.2682101085580157];
    const o40 = {
        [v39]: v38,
    };
    new Uint8Array(2165, v11);
    for (let v42 = 0; v42 < 5; v42++) {
        v16 = v42;
    }
    const v43 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
    const o44 = {
        __proto__: v43,
    };
    o44.slice().push(v14);
`;
eval(v7);
gc();
