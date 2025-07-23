function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740990;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C6 {
    7 = v3;
    get e() {
    }
    static [v5];
    #f = F0;
    5 = v3;
    #e = v5;
}
new C6();
const v9 = new C6();
function f10(a11, a12) {
    const o13 = {
        "e": v5,
        [a11]: F0,
        __proto__: a11,
        "d": v5,
        "a": a12,
        3193628175: a12,
    };
    return o13;
}
const v14 = f10(v9, v5);
f10(C6, v3);
f10(v14);
[-13,9223372036854775807,-65536,1968493008,-128,268435439,19683,-24349,-9,1024];
[4096,11,0,-3,-12,-9007199254740990,-13,13,10000,4335];
const v19 = [-8,-888687276,-1073741824,1950105417];
try { ("5GzvX").search(v19); } catch (e) {}
"bigint" == "bigint";
[55133,128,129,1073741824,4294967296,11,2147483648,5,536870912,12];
[-59930,-1073741824,957130445,-65537,3226,-31451];
const v26 = [13,65537,764961293];
const v27 = [-772643886,4];
try { v27.entries(); } catch (e) {}
v27[1] = v27;
[10,-9007199254740992,1073741825,-4096,-9007199254740992,4096,-9007199254740992,1000];
function F30(a32) {
    if (!new.target) { throw 'must be called with new'; }
    const v33 = this?.constructor;
    try { new v33(v26); } catch (e) {}
}
const v35 = new F30();
const v36 = v35?.valueOf;
try { v36(); } catch (e) {}
let v38;
try { v38 = v36(); } catch (e) {}
class C39 extends F30 {
}
const v40 = new C39();
try { v40.constructor(); } catch (e) {}
const v42 = v40?.__lookupSetter__;
try { v42(v38); } catch (e) {}
try { new v42(v35); } catch (e) {}
const v45 = `
    function f46() {
        const o53 = {
            ["match"]: "match",
            set b(a51) {
                this.getFloat64();
            },
            [-128]: "p",
            "g": f46,
        };
    }
    const v54 = f46();
    function f55(a56) {
        const o60 = {
            1: a56,
            "f": v54,
            m(a58, a59) {
                return a56;
            },
        };
        return o60;
    }
    f55();
    class C62 {
    }
    -2147483648 >> -2147483648;
    const v66 = [1.7664845889080372,0.18563487804419587,2.0,-1.0,2.3318882112552703];
    const v67 = [2.0,1.7976931348623157e+308,1.495268757093988e+308,-2.220446049250313e-16,868534.9674234882,728.6010299510945,-2.1354866943347628e+307,-190.92537356432058,3.0];
    try { v67.some(); } catch (e) {}
    [-9.898163380270953,-1.1922601555653612e+308,941.8923739441186,2.220446049250313e-16];
    class C70 {
    }
    C70[12] = C70;
    const v71 = new C70(v67, v67, v66);
    const v73 = [-Infinity,-691832.4173211381,1000000000000.0,NaN,-3.0,1000000000000.0,1000000000000.0,-3.0];
    try { v73.copyWithin(); } catch (e) {}
    [-3.0,-651244.1040493406,-1000000000.0];
    const v76 = [2.0,-4.0];
    v76[1] = v76;
    function f77(a78, a79, a80) {
        const o81 = {
        };
        return o81;
    }
    f77.d = f77;
    const v82 = f77(1023839354n);
    function F83(a85, a86, a87, a88) {
        if (!new.target) { throw 'must be called with new'; }
        const v89 = this.constructor;
        try { new v89(F83, 334801300n, v71); } catch (e) {}
        a86.length;
    }
    new F83(v76, f77, v82, F83);
    const o93 = {
    };
    const o94 = {
    };
    o94.h = 334801300n;
    const o95 = {
    };
    const o96 = {
    };
    v82.toString();
    function f99(a100, a101) {
        const o102 = {
        };
        return o102;
    }
    const v105 = new Uint32Array();
    new Float64Array(0);
    v105["reduceRight"](f99, -7.496130508724004);
    const v111 = v35 <= v40;
    let v112 = v111 ^ v111;
    v112 / v112;
    const v114 = Math?.atanh;
    try { new v114(v112); } catch (e) {}
    Math.cos(v45);
    let v118 = -534378043;
    v118++;
    v45 * v118;
    v112--;
`;
eval(v45);
gc();
