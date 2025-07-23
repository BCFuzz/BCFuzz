const v2 = new Int8Array(127);
let v5 = new BigInt64Array(231);
const v8 = new Uint32Array(2);
function f9(a10, a11, a12) {
    const o16 = {
        get g() {
            let v14;
            try { v14 = v2.findLast(a12, this); } catch (e) {}
            v5 = v14;
            v8.byteOffset;
            return a11;
        },
        [a11]: a10,
        __proto__: v5,
        1090: 231,
        "a": v2,
    };
    return o16;
}
f9(127, 2, f9(2, 2, BigInt64Array));
f9(2, 231, BigInt64Array);
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 23272n;
}
const v29 = new F26(14n);
const v30 = [9.272833070144799];
try { v29.toUTCString(v30, 3.0, 14n, 9223372036854775807n, 0.4009517788249297); } catch (e) {}
const v34 = v29[v30];
try { v34(); } catch (e) {}
const v39 = [2087322165,-1439285056];
const v40 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
const v41 = [4096];
function f42(a43, a44) {
    const o53 = {
        [a44](a46, a47, a48, a49) {
            a46[Promise] = "matchAll";
            try { a44(this, ..."UrW", ...a48, ...a47, ...a46, this); } catch (e) {}
            super[this];
            return a44;
        },
        [a43]: "getFloat32",
        __proto__: v40,
        ["m"]: v39,
        [v39]: v41,
    };
    return o53;
}
f42(f42("matchAll", "UrW"), "m");
const v56 = f42("pqwpR", v41);
class C59 {
    constructor(a61, a62, a63) {
    }
}
for (let v64 = 0; v64 < 10; v64++) {
}
let v66 = 0;
do {
    const v67 = f42("m", v56);
    v67.valueOf = f42;
    new f42(..."pqwpR", ..."UrW", f42, ..."matchAll", v67, v67);
    v66++;
} while (v66 < 10)
gc();
