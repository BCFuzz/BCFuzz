function f0() {
    const o12 = {
        get d() {
            let v5;
            try { v5 = new this(this); } catch (e) {}
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = v5;
            }
            const v9 = new F6("o");
            new F6(v9);
            new F6(v5);
            return "toStringTag";
        },
        "d": "toStringTag",
        "g": "o",
        "c": -3.0,
    };
    return o12;
}
f0();
f0();
f0();
[0n,f0,1073741823];
[38313n];
[38313n,-4096,-2147483647n];
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740990;
}
const v28 = new F25();
new F25();
const v30 = new F25();
class C31 {
    7 = v28;
    get e() {
    }
    static [v30];
    #f = F25;
    5 = v28;
    #e = v30;
}
new C31();
const v34 = new C31();
function f35(a36, a37) {
    const o38 = {
        "e": v30,
        [a36]: F25,
        __proto__: a36,
        "d": v30,
        "a": a37,
        3193628175: -4096,
    };
    return o38;
}
const v39 = f35(v34, v30);
f35(C31, v28);
f35(v39);
[-13,9223372036854775807,-65536,1968493008,-128,268435439,19683,-24349,-9,1024];
[4096,11,0,-3,-12,-9007199254740990,-13,13,10000,4335];
const v44 = [-8,-888687276,-1073741824,1950105417];
try { ("5GzvX").search(v44); } catch (e) {}
"bigint" == "bigint";
[55133,128,129,1073741824,4294967296,11,2147483648,5,536870912,12];
[-59930,-1073741824,957130445,-65537,3226,-31451];
const v51 = [13,65537,764961293];
const v52 = [-772643886,4];
try { v52.entries(); } catch (e) {}
v52[1] = v52;
[10,-9007199254740992,1073741825,-4096,-9007199254740992,4096,-9007199254740992,1000];
function F55(a57) {
    if (!new.target) { throw 'must be called with new'; }
    const v58 = this?.constructor;
    try { new v58(v51); } catch (e) {}
}
const v60 = new F55();
const v61 = v60?.valueOf;
let v62;
try { v62 = v61(); } catch (e) {}
let v63;
try { v63 = v61(); } catch (e) {}
class C64 extends F55 {
}
const v65 = new C64();
try { v65.constructor(); } catch (e) {}
const v67 = v65?.__lookupSetter__;
try { v67(v63); } catch (e) {}
try { new v67(v60); } catch (e) {}
const v70 = `
    function f71() {
        const o78 = {
            [v62]: "match",
            set b(a76) {
                this.getFloat64();
            },
            [-128]: f71,
            "g": f71,
        };
    }
    const v79 = f71();
    function f80(a81) {
        const o85 = {
            1: a81,
            "f": v79,
            m(a83, a84) {
                return a81;
            },
        };
        return o85;
    }
    f80();
    class C87 {
    }
    -2147483648 >> -2147483648;
    const v91 = [1.7664845889080372,0.18563487804419587,2.0,-1.0,2.3318882112552703];
    const v92 = [2.0,1.7976931348623157e+308,1.495268757093988e+308,-2.220446049250313e-16,868534.9674234882,728.6010299510945,-2.1354866943347628e+307,-190.92537356432058,3.0];
    try { v92.some(); } catch (e) {}
    [-9.898163380270953,-1.1922601555653612e+308,941.8923739441186,2.220446049250313e-16];
    class C95 {
    }
    C95[12] = C95;
    new C95(v92, v92, v91);
    const v98 = [-Infinity,-691832.4173211381,1000000000000.0,NaN,-3.0,1000000000000.0,1000000000000.0,-3.0];
    try { v98.copyWithin(); } catch (e) {}
    let v100 = [-3.0,-651244.1040493406,-1000000000.0];
    const v101 = [2.0,-4.0];
    v101[1] = v101;
    function f102(a103, a104, a105) {
        const o106 = {
        };
        return o106;
    }
    f102.d = f102;
    const v107 = f102(1023839354n);
    function F108(a110, a111, a112, a113) {
        if (!new.target) { throw 'must be called with new'; }
        this.constructor;
        a111.length;
    }
    new F108(v101, f102, v107, F108);
    const o117 = {
    };
    const o118 = {
    };
    const o119 = {
    };
    const o120 = {
    };
    function f122(a123, a124) {
        const o125 = {
        };
    }
    const v127 = new Uint32Array();
    const v129 = v127 ^ (v60 <= v65);
    v129 / v129;
    Math?.atanh;
    -534378043;
    v100--;
`;
eval(v70);
gc();
