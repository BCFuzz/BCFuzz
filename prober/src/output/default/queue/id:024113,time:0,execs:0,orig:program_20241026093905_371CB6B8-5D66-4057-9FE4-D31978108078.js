for (let i3 = 70, i4 = 10 + 10; i4--, i4;) {
}
const v10 = /u?/y;
const v12 = [];
const v14 = Reflect.apply(v10.compile, v10, v12);
const v17 = new Float32Array(v10, 70, v14);
const v19 = `
    new Int8Array();
    const v25 = \`
    \`;
    new BigInt64Array(1155);
    const v30 = new Uint16Array(1874);
    for (let i32 = 0; i32 < 21768; i32++) {
    }
    function f39(a40, a41) {
        v30[1.0] /= 1.0;
        return v19;
    }
    const v42 = ("boolean").constructor;
    let v43;
    try { v43 = v42.raw(); } catch (e) {}
    this.b = this;
    new Float32Array();
    const v46 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
    function f47(a48, a49) {
        return "boolean";
    }
    v46.set = f47;
    function f50(a51, a52) {
        return v43;
    }
    function f53(a54, a55) {
        return BigInt64Array;
    }
    switch ("n") {
        case v14:
            function f56(a57) {
                return a57;
            }
            const v58 = f56(255);
            f56(f56);
            function F60(a62, a63, a64) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F60(v58, v43, f56);
            v17[1172] = 251;
            break;
    }
    /\u{12345}/myvis;
`;
eval(v19);
gc();
