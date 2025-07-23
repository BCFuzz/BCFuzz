function f0() {
    const o4 = {
        "a": 3.0,
        13: 3.0,
        "d": 3.0,
        "h": "HU",
        ..."HU",
        "g": "HU",
        [3.0]: 1000.0,
        "c": 3.0,
        ["HU"]: 1000.0,
        ..."HU",
    };
    return o4;
}
let v5 = f0();
const v6 = f0();
let v7 = f0();
function f8(a9) {
    a9[1];
    a9[0] = a9;
    const o12 = {
        get h() {
            v7 <<= this;
            return f0;
        },
        "c": v6,
        ...v6,
        ...v5,
        ...v6,
        __proto__: v5,
        "h": a9,
    };
    return o12;
}
const v13 = f8?.__lookupGetter__;
try { new v13(v5); } catch (e) {}
const v15 = f8?.__defineGetter__;
try { new v15(f0, v6); } catch (e) {}
f8(v6);
const v18 = f8(v5);
v18.HU;
v18.f = v18;
const v20 = v18.c;
v20 - v20;
const v22 = -v20;
v22 & v22;
v18.HU = v18;
const v24 = f8(v5);
v24.c = v24;
class C25 extends f0 {
    9 = v24;
    #a;
    get h() {
        this | v6;
        v5 = v24;
        function f28() {
            return v7;
        }
        return v24;
    }
}
try { new C25(); } catch (e) {}
C25.length;
let v31;
try { v31 = new C25(); } catch (e) {}
v31[13] = v31;
v31[13] = v31;
const v32 = C25.prototype;
const v33 = v32?.constructor;
try { new v33(); } catch (e) {}
v32.h = v32;
const v35 = v32?.constructor;
let v36;
try { v36 = new v35(); } catch (e) {}
v36[1];
try { new v35(); } catch (e) {}
const v39 = new C25();
v39[13] = v39;
new C25();
const v41 = new C25();
v41[13] = v41;
try { v41.propertyIsEnumerable(f8); } catch (e) {}
v41.g = v41;
class C44 extends Set {
}
const v45 = new C44();
v45.c = v45;
const v46 = new C44();
try { v46.forEach(v31); } catch (e) {}
const v48 = v45[v46];
const v50 = Symbol.species;
Symbol.for(v50.description);
Symbol.for(Symbol.for(v50.description).description);
const v61 = v50.description;
let v62;
try { v62 = v61.blink(); } catch (e) {}
try { v62.trimStart(); } catch (e) {}
Symbol.for(v61);
v50.toString = v48;
gc();
