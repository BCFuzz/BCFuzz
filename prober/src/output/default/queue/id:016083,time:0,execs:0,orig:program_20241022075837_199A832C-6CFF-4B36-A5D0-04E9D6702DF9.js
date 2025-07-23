const v0 = `
    function f1() {
        return f1;
    }
    f1();
    f1();
    f1();
    const v7 = new Int8Array(67);
    v7[50];
    const v11 = new Float32Array(257);
    v11[71];
    1286 + 1286;
    let v15 = new Int8Array(1286);
    v15[486];
    function f17() {
        return v11;
    }
    const v18 = [-1.1465388272945179e+308];
    [-1.0,8.531456716782174,847.7854138654166,1.7976931348623157e+308];
    [-560.6411929155164,1000.0,-Infinity,1000.0,-6.272787585923298];
    function F21() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F21();
    const v27 = new Uint8Array(2815);
    const v29 = [];
    Reflect.apply(("5ix").replaceAll, v27, v29);
    const v32 = new F21();
    const v33 = new F21();
    -(-5.0);
    [-5.0,F21,[-1.2729352502928637e+308,v32]];
    [1.6108883737384262e+308,v33,-5.0,1.6108883737384262e+308];
    try { Set(); } catch (e) {}
    new Set();
    v15 = v11;
    function F44(a46, a47) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f48(a49, a50, a51, a52) {
        return Reflect;
    }
    try { ("Mtdop").search(F21); } catch (e) {}
    function f55() {
        return v0;
    }
    f55();
    let v58 = new Int32Array();
    const v60 = new Float32Array();
    let v61 = 0;
    while (5 >> 5, v61 < 5) {
        v60.c = -2;
        const o65 = {
        };
        o65.g = v33;
        o65.g = v18;
        const v66 = [0.2072042418414315,3.0,-1000000.0,2.0];
        const o67 = {
            __proto__: v66,
        };
        const v71 = new Uint8ClampedArray(231);
        Reflect.construct(Uint32Array, [v71], Uint32Array);
        v61++;
    }
    [...v58] = v60;
    /\u{12345}/myvis;
`;
eval(v0);
gc();
