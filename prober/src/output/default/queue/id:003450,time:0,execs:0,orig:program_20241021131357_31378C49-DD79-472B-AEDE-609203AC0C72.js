function f0() {
    return f0;
}
const v1 = f0();
const v2 = f0();
const v3 = f0();
function f4(a5, a6) {
    a5.name = a5;
    a6.d = a6;
    const v8 = a5?.constructor.toString;
    try { v8(); } catch (e) {}
    const o10 = {
        ...v1,
        "g": v3,
        __proto__: v1,
    };
    const t16 = o10.d;
    new t16();
    return o10;
}
f4.e = f4;
const v13 = f4(v2, v3);
let v14;
try { v14 = v13.g(); } catch (e) {}
v14.prototype = v14;
f4(v13, v1);
let v20 = URIError;
class C22 {
    constructor(a24, a25, a26, a27) {
        for (let i = 0; i < 25; i++) {
            let v28 = 9;
            const v30 = new Uint8ClampedArray();
            v30[268435440] = v30;
            let v31 = 3;
            ({"b":v31,"buffer":v31,"byteLength":v28,...v20} = v30);
            const v32 = [4.0,Infinity,0.5618997475165836,0.43493627721911254,3.0,NaN,-0.0,4.0];
            [0.8137957067341389,0.011353854179586897,1000000000.0,-5.0,Infinity,0.24802319623700397];
            const o34 = {
                __proto__: v32,
            };
            const v35 = o34.entries();
            try { v35.next(); } catch (e) {}
            new Uint8Array(a27);
        }
    }
}
const v38 = new C22();
const v39 = v38.propertyIsEnumerable();
v39 || v39;
new C22(-1, -9007199254740991, v38, 4294967296);
gc();
