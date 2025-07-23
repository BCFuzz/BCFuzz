let v0 = 0;
do {
    v0++;
} while ((() => {
        const v5 = Array();
        const v6 = [1160,-1073741824,65536,-475014326];
        const v7 = [1117210931];
        const v8 = [1005463156,-56504,4,9060,-2145881813,165,1024];
        const v9 = [-1.7976931348623157e+308,602991.2199528255,0.7876811047360648,5.0,1.8350315578498684,1.0,-4.0,-2.631370989212797e+306,-Infinity];
        const v10 = [-510136.20331745635,-3.634002389920532,-5.45456894194805,319857.0733143429,434.19084722989396];
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a15.g = a15;
            a13.reverse(v0, v8, v5, v0, a13);
            const o22 = {
                "maxByteLength": 9,
            };
            const v24 = new SharedArrayBuffer(9, o22);
            const v26 = new Int8Array(v24);
            v26[7];
        }
        new F11(v8, v9, v5);
        new F11(v10, v7, v6);
        const v30 = new F11(v6, v10, v8);
        const v31 = v30.constructor;
        try { new v31(F11, v7, Array); } catch (e) {}
        return v0 < 6;
    })())
gc();
