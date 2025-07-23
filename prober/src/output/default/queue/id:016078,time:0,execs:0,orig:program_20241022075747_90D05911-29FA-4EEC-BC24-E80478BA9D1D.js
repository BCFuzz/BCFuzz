function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1();
class C5 extends F1 {
}
const v6 = new C5();
const v7 = `
    const v8 = v4 <= v6;
    v8 && v8;
    const v10 = v8 ^ v8;
    v10 - v10;
    new Uint8ClampedArray(2055);
    ([-26506,-32957,-9007199254740992,-2005272752])["reverse"]();
    const v20 = Math.cos();
    const v22 = Number.isNaN(v20);
    const v23 = v20 * v20;
    class C26 {
        #valueOf(a28, a29) {
        }
        static a = 256;
        #e = 256;
        p(a31, a32, a33) {
            Number(1, 2055, v22);
        }
        #b;
        [536870889];
    }
    new C26();
    const v36 = new C26();
    v36[536870889] = v36;
    const v37 = new C26();
    v37[536870889] = v37;
    function F38(a40, a41, a42) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F38();
    new F38();
    new F38();
    try { WeakSet(); } catch (e) {}
    new WeakSet();
    class C50 extends WeakSet {
        [2147483648n] = 2147483648n;
        m(a52, a53) {
        }
        static #toString(a55) {
        }
    }
    new C50();
    function f57(a58) {
        const o59 = {
            [v23]: "reverse",
        };
        return 2055;
    }
    function f60(a61, a62) {
        return v8;
    }
    function f63() {
    }
    function f64(a65, a66, a67) {
        return v37;
    }
    function F68(a70) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f71(a72, a73) {
        return a72;
    }
    class C74 {
        constructor(a76, a77, a78) {
        }
    }
    for (let v79 = 0; v79 < 5; v79++) {
    }
    for (let i = 0; i < 5; i++) {
    }
    let v80 = -534378043;
    const o83 = {
        "maxByteLength": 687,
    };
    const v85 = new SharedArrayBuffer(8, o83);
    new Int32Array(v85);
    const o88 = {
    };
    function f89() {
    }
    v80++;
    const v93 = new BigUint64Array(586);
    class C94 {
    }
    new C94();
    [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    for (const v97 of v93) {
    }
    for (let i100 = 0, i101 = 7; i100 < i101; i101--) {
    }
`;
eval(v7);
gc();
