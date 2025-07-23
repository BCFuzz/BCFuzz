const v1 = `
    const v3 = ("-13")[undefined];
    const o4 = {
    };
    const o5 = {
    };
    const o6 = {
    };
    o6.e = o6;
    class C7 {
    }
    const v9 = Symbol.apply;
    let {...v11} = Reflect;
    try { v9(v9); } catch (e) {}
    function f14(a15, a16) {
        return o6;
    }
    const v17 = f14();
    const v18 = v17.e;
    v18.b = v18;
    const v19 = f14();
    let v20;
    try { v20 = v19.__defineSetter__(v3); } catch (e) {}
    const v22 = f14("-13", o6).e;
    try { v22(); } catch (e) {}
    let v24;
    try { v24 = Reflect.deleteProperty(v9, v1); } catch (e) {}
    const v25 = !v24;
    v25 || v25;
    const v27 = [v19,v19,v19];
    let v28;
    try { v28 = v27.filter(v17); } catch (e) {}
    const v29 = Reflect.construct(Uint32Array, v27);
    v29.join(v20, undefined, v1);
    const v31 = v29.byteOffset;
    v31 & v31;
    let v34;
    try { v34 = ArrayBuffer(v18, v28); } catch (e) {}
    const o35 = {
        "g": v34,
    };
    const o36 = {
    };
    class C37 {
    }
`;
eval(v1);
gc();
