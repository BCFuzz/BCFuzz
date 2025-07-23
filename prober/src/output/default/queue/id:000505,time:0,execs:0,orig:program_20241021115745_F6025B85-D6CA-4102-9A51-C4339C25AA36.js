let v2 = "setFloat32";
function f3(a4) {
    try { a4.match("valueOf"); } catch (e) {}
    const o16 = {
        n(a7, a8) {
            let v9 = 0;
            do {
                v2 = this;
                try { new this(v9); } catch (e) {}
                v2[Symbol.toPrimitive] = a4;
                v9++;
            } while (v9 < 6)
            return v2;
        },
    };
    return o16;
}
f3.e = f3;
const v17 = f3("valueOf");
const v18 = f3(v2);
const v19 = f3("valueOf");
-1.7181639890015015e+308 >> -1.7181639890015015e+308;
function f24(a25, a26) {
    try { a25.n(a25, a25); } catch (e) {}
    a26 - a26;
    const o33 = {
        "d": v2,
        __proto__: a25,
        ...v2,
        set a(a30) {
            try { a25["n"](a30, ..."n", a25, 0.19576699615920135, ...v19, ..."valueOf"); } catch (e) {}
        },
        "c": 409.1035289775639,
        "a": 409.1035289775639,
        "g": "g",
        "f": v2,
        "b": a25,
        [409.1035289775639]: v19,
        "e": a25,
        "h": 409.1035289775639,
    };
    return o33;
}
const v34 = f24(v17, -1.7181639890015015e+308);
v34.a = v34;
const v35 = f24(v34, 0.19576699615920135);
const v36 = f24(v19, 0.19576699615920135);
function F37(a39, a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    a40 >>> a40;
    this.a = a39;
    this.h = a40;
    this.e = a40;
}
F37.d = F37;
const v44 = new F37(v34, 0.19576699615920135, v19, v18);
const v45 = new F37(v35, 409.1035289775639, v19, v19);
new F37(v36, 409.1035289775639, v45, v19, v17, v44);
function F47() {
    if (!new.target) { throw 'must be called with new'; }
    const v49 = this?.constructor;
    try { new v49(); } catch (e) {}
}
const v51 = new F47();
const v52 = v51?.constructor;
try { new v52(); } catch (e) {}
const v54 = new F47();
v54.f = v54;
const v56 = [1.6108883737384262e+308,v54];
function f58() {
    const o61 = {
        get b() {
            super.e;
        },
    };
    o61.b = o61;
}
try { f58(); } catch (e) {}
const v63 = f58();
let [v64,v65,v66] = "c";
const v67 = v63 % v56;
v67 >>> v67;
f58();
Object.defineProperty(v51, 129, { configurable: true, get: f58 });
gc();
