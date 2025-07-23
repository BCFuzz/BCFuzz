class C9 {
    constructor(a11, a12) {
        class C13 {
        }
        const o16 = {
            "maxByteLength": 2147483648,
        };
        const v18 = new SharedArrayBuffer(257, o16);
        const v20 = new Int32Array(v18);
        function f21(a22, a23) {
            a22[16] = 2147483648;
            return a22;
        }
        f21(v20);
        for (let v25 = 0; v25 < 25; v25++) {
        }
    }
}
const v26 = new C9(-1464851272n, Float64Array);
const v27 = new C9(11n, Int16Array);
const t20 = v27.constructor;
new t20(v26, v27, 127);
new C9();
new C9();
gc();
