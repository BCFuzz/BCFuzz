function f0() {
}
[-38280,7,1073741823,-2147483648];
[65537,-65536,-4096,16,-4294967296,-9281];
[7,257,-9223372036854775808,-1,1653643736];
[-1.6895912103314085e+308,-1.0,1000000000.0,-536119.637661363,NaN,-Infinity,0.9842356870475649,-1.0];
[Infinity,-1000000000000.0];
const v6 = [-1e-15];
for (let v10 = 0; v10 < 32; v10++) {
    v6["p" + v10] = v10;
}
const v19 = new Map();
async function f21(a22, a23, a24) {
    a22.then = f0;
    a23.then = f0;
    function f25(a26, a27) {
        function f28(a29) {
            ArrayBuffer.prototype;
            v19.b = 2312845920;
            const o36 = {
                "maxByteLength": 2312845920,
            };
            new ArrayBuffer(750704325, o36);
            return a23;
        }
        f28(a22);
        f28();
        for (let v41 = 0; v41 < 5; v41++) {
        }
        return a27;
    }
    a24.then = f25;
    return a24;
}
f21.then = f21;
f21.then = f0;
f21(f21, f21, f21);
gc();
