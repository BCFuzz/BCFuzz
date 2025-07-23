function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9007199254740990;
    this.h = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
7 >> 7;
Uint8Array.d = Uint8Array;
const v8 = new Uint8Array(7);
const v9 = v8.indexOf(7);
const v10 = new F0();
v10.g = v10;
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    a13.g;
    this.f = a13;
    NaN >>> NaN;
    Symbol.e = Symbol;
    const v20 = Symbol.iterator;
    const o29 = {
        [v20]() {
            let v22 = 10;
            const o28 = {
                next() {
                    v22--;
                    const v26 = v22 == 0;
                    const o27 = {
                        "done": v26,
                        "value": v22,
                    };
                    return o27;
                },
            };
            return o28;
        },
    };
    o29.e = o29;
    this.d = a13;
}
try { new F11(Uint8Array); } catch (e) {}
const v31 = new F11(v3);
const v32 = new F11(v31);
new F11(v4);
const v35 = [536870888];
v35[0] = v35;
function F36(a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.__defineSetter__(a39, this); } catch (e) {}
    this.f = a38;
    this.d = a38;
    this.b = a38;
}
new F36(v4, v32, v31);
new F36(v35, v32, v32);
const v44 = new F36(v32, v32, v32);
const v45 = [-1418288338,1890054263,64122,-4294967296,7,-63644,1094129896,48202,367263938,24122];
let v46 = 268435439;
v46 >> v46;
const v48 = v46--;
with (v45) {
    length = v35;
}
5.0 / 5.0;
v45[v48] = 5.0;
536870912 === 536870912;
[4096,11,0,-3,-12,-9007199254740990,-13,13,10000,4335];
[55133,128,129,1073741824,4294967296,11,2147483648,5,536870912,12];
const v58 = [13,65537,764961293];
const v59 = v58.at();
v59 >> v59;
const v61 = [-772643886,4];
v61[1] = v61;
function F62(a64) {
    if (!new.target) { throw 'must be called with new'; }
    const v65 = this?.constructor;
    try { new v65(a64); } catch (e) {}
}
try { new F62(F36); } catch (e) {}
const v68 = new F62();
try { v68.constructor(v9); } catch (e) {}
v68?.valueOf;
class C71 extends F62 {
}
C71.name;
const v73 = new C71();
v73.length = v73;
const v74 = v73.__lookupSetter__;
v74.c = v74;
const v75 = `
    const v76 = v68 <= v73;
    let v77 = v76 ^ v76;
    const v78 = v77 / v77;
    v78 & v78;
    let v82 = -534378043;
    v82++;
    v82 - 534378043;
    v77--;
    const v86 = Math.hypot();
    v86 % v86;
`;
const v89 = eval(v75);
v89 >> v89;
class C91 {
}
function f92() {
    const v94 = createGlobalObject();
    const v95 = v44.b;
    const v96 = v95?.constructor;
    try { new v96(v58); } catch (e) {}
    function f98() {
        return v48;
    }
    createGlobalObject[0] = v95;
    const v99 = v94.Atomics;
    v99.compareExchange(v99, v99, C91, C91);
    return v99;
}
f92.name;
try { f92.call(C91, C91, f92); } catch (e) {}
gc();
