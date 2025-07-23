RegExp();
new WeakMap();
try { BigInt64Array(); } catch (e) {}
new BigInt64Array();
const t4 = -1.0490479686079355e+308;
with (delete t4.e) {
}
try {
const t0 = 536870889;
t0();
} catch (e) {}
function f15() {
    return 129;
}
class C16 extends f15 {
    static #f = -6;
}
new C16();
new Float64Array();
const v26 = new BigUint64Array();
new Float64Array();
function f30(a31, a32) {
    a31++;
    const o36 = {
        "a": v26,
        get g() {
            switch (2058) {
                case a32:
                    super.f >>>= a31;
                    break;
            }
            return this;
        },
        "f": a31,
        [v26]: 5,
    };
    return o36;
}
f30.name;
const v38 = f30();
v38.a = v38;
f30();
f30();
const v49 = new Float32Array();
try { v49.findLast(); } catch (e) {}
function F52(a54, a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
}
new F52();
new F52();
const v60 = `
    const v62 = ("-13")[undefined];
    const o63 = {
    };
    o63.h = o63;
    o63.h = o63;
    const o64 = {
    };
    o64.h = v62;
    o64.e = v62;
    const o65 = {
    };
    o65.h = o65;
    o65.h = o65;
    class C66 {
    }
    function f68() {
    }
    Symbol.toPrimitive;
    let v71;
    try { v71 = Reflect.deleteProperty(); } catch (e) {}
    !v71;
    const o74 = {
    };
    new ArrayBuffer();
    new Uint8ClampedArray();
    function f79() {
    }
    class C80 {
    }
    class C81 {
    }
    /9(?!a)?a/gs;
    const o86 = {
        toString(a84, a85) {
        },
    };
    const o87 = {
    };
    class C88 {
        #toString(a90, a91, a92) {
        }
    }
`;
eval(v60);
gc();
