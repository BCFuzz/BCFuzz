const v0 = `
    function f1() {
        const o11 = {
            "b": -1475969458,
            valueOf(a5) {
                let v4 = this;
                super["h"] = v4;
                2.0 << 2.0;
                Math.acosh();
                ++v4;
            },
            ..."h",
        };
        return f1;
    }
    f1();
    f1();
    f1();
    const v17 = new Int8Array(67);
    v17[50];
    const v21 = new Float32Array(257);
    v21[71];
    1286 + 1286;
    const v25 = new Int8Array(1286);
    v25[486];
    function f27() {
    }
    const v28 = [-1.1465388272945179e+308];
    [-1.0,8.531456716782174,847.7854138654166,1.7976931348623157e+308];
    [-560.6411929155164,1000.0,-Infinity,1000.0,-6.272787585923298];
    function F31() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F31();
    const v34 = new F31();
    const v35 = new F31();
    -(-5.0);
    [-5.0,F31,[-1.2729352502928637e+308,v34]];
    [1.6108883737384262e+308,v35,-5.0,1.6108883737384262e+308];
    try { new Set(); } catch (e) {}
    new Set();
    try { ("Mtdop").search(F31); } catch (e) {}
    function f48() {
        const o50 = {
            get b() {
                let v49 = this;
                v49 *= v49;
            },
        };
        return o50;
    }
    f48();
    let v53 = new Int32Array();
    const v55 = new Float32Array();
    let v56 = 0;
    while (5 >> 5, v56 < 5) {
        v55.c = -2;
        const o60 = {
        };
        o60.g = v28;
        v56++;
    }
    [...v53] = v55;
    /\u{12345}/myvis;
`;
eval(v0);
gc();
