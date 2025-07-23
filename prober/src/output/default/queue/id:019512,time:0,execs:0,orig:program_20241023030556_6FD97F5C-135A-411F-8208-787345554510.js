const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.c = v0;
}
const v3 = new F1();
const v4 = new F1(v3, F1);
const v5 = new F1();
function f10(a11, a12) {
    const o26 = {
        "f": v5,
        [v0](a14, a15, a16, a17) {
            try { v5(this, a16, null); } catch (e) {}
            const o21 = {
                "maxByteLength": 129,
            };
            const v23 = new SharedArrayBuffer(127, o21);
            const v25 = new Int8Array(v23);
            return v25;
        },
    };
    return o26;
}
f10(v3, -4294967295n);
const v28 = f10(v4, -4294967295n);
f10(v3, -9223372036854775808n);
const v32 = new Int32Array(681, v5);
function f33(a34, a35, a36, a37) {
    function f38() {
        function f40() {
            return arguments;
        }
        function f41(a42) {
            a42--;
            return arguments;
        }
        f40.toString = f41;
        f40.toString();
        return arguments;
    }
    f38();
    return v28;
}
v32.map(f33);
gc();
