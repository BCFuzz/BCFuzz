function f0() {
}
class C1 {
    constructor() {
        9 <= 9;
        const v6 = Uint32Array.length;
        const v7 = new Uint32Array(9);
        try { v7.reduceRight(f0); } catch (e) {}
        const v11 = new Float64Array(3);
        new Int8Array(256);
        try { v11.findLast(f0, v6); } catch (e) {}
        const o16 = {
            "apply": f0,
            "call": f0,
            "construct": f0,
            "getOwnPropertyDescriptor": f0,
            "getPrototypeOf": f0,
            "has": f0,
            "isExtensible": f0,
            "ownKeys": f0,
            "preventExtensions": f0,
        };
        new Proxy(v11, o16);
    }
    #b = f0;
}
new C1();
const v20 = new C1();
const v21 = v20?.constructor;
try { new v21(); } catch (e) {}
let v23 = new C1();
const v24 = v23?.constructor;
try { new v24(); } catch (e) {}
let v27 = 2147483649;
v27--;
({"b":v23,} = v23);
this * v27;
for (let v31 = 0; v31 < 10; v31++) {
}
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = [-6,16,3,48630,-3444,7,1024];
for (let v39 = 0; v39 < 10; v39++) {
    const v41 = new Proxy(v38, v38);
    const v42 = new Proxy(v41, v41);
    v42[4];
    v42.concat(v41);
}
gc();
