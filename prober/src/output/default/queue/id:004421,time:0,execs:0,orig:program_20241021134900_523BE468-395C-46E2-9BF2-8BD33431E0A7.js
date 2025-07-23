function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 5;
    this.e = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v5.h = v5;
function f6() {
    return v4;
}
f6.length = f6;
try { new Array(v3); } catch (e) {}
const v10 = new Array(4);
let v14 = 2147483647;
v14--;
const v20 = new Uint8Array(3734);
v20[151];
let v22 = 193;
v22--;
Float32Array.d = Float32Array;
const v25 = new Float32Array(v22);
128 & 128;
new BigUint64Array(128);
function f30() {
}
46 / 46;
try { new Float32Array(v10, F0, v25); } catch (e) {}
const v35 = new Float32Array(46);
new Float64Array(512);
const v39 = [-256,2,-13,-50424,536870887,-256];
v39.length;
const v43 = [-2.220446049250313e-16,v39,0.4545490646025385];
for (const v44 in v43) {
    v43.length = v44;
}
BigUint64Array.BYTES_PER_ELEMENT;
new BigUint64Array(1536);
class C49 extends Float32Array {
    #valueOf(a51, a52, a53, a54) {
        const v55 = [this,512];
        const v56 = [512];
        [Float32Array,v56,v56] < 46;
        return v55;
    }
    static e = Float64Array;
}
C49.length = C49;
new C49();
const v64 = new C49();
const v65 = new C49();
v65.a = v65;
function F67(a69, a70, a71) {
    if (!new.target) { throw 'must be called with new'; }
    const v72 = this?.constructor;
    try { new v72(v22, 46, v5); } catch (e) {}
}
const v74 = new F67();
const v75 = v74?.constructor;
try { new v75(v64, Uint8Array, v64); } catch (e) {}
new F67();
-1 - -1;
const v82 = `
    const v84 = ("-13")[undefined];
    const o85 = {
    };
    o85.h = o85;
    o85.h = v84;
    const o86 = {
    };
    o86.h = v84;
    o86.e = v84;
    const o87 = {
    };
    o87.h = o87;
    class C88 {
        #o(a90) {
        }
    }
    function f92(a93, a94) {
        const o95 = {
        };
    }
    f92(v84, v74);
    try { Reflect.deleteProperty(v35, "-13"); } catch (e) {}
    const v100 = Reflect.construct(Uint32Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
    const o101 = {
    };
    v100.reverse();
    const o103 = {
    };
    class C104 {
        #toString(a106, a107, a108) {
            return v64;
        }
    }
`;
const v110 = eval(v82);
v110 - v110;
gc();
