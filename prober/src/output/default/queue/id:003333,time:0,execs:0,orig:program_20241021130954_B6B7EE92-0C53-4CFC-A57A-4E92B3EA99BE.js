const v2 = new Array(255);
function f3(a4, a5) {
    a4.length;
    const o17 = {
        ...a5,
        p(a8, a9) {
            const o12 = {
                "unscopables": 761,
            };
            const v14 = new ArrayBuffer(761, o12);
            new Uint8Array(v14);
            return a9;
        },
    };
    return o17;
}
let v18;
try { v18 = new f3(255, Array); } catch (e) {}
try { v18.p(f3, 255); } catch (e) {}
const v20 = f3(v2, Array);
const v21 = f3(v20, v2);
try { v21.p(v2, f3); } catch (e) {}
const v23 = f3(v21, Array);
const v24 = v23?.__lookupGetter__;
try { new v24(v20); } catch (e) {}
const v28 = Int8Array.prototype;
new Int8Array(59, 255, Array);
1 + 1;
const v32 = ~1;
v32 % v32;
try { new BigUint64Array(v28, 59, v28); } catch (e) {}
new BigUint64Array(1);
switch (v23) {
    default:
        v23.__proto__ = v20;
}
const v39 = new Int32Array(8);
v39[3] = v39;
-1.300436262493229e+308 >>> -1.300436262493229e+308;
-(-1000.0);
const v44 = [-1000.0,-1000.0,-1000.0];
const v45 = [-1000.0];
try { v45.map(Int8Array); } catch (e) {}
const v49 = [];
const v51 = Reflect.apply(v44.toReversed, v23, v49);
try { new v51(v28, Uint32Array); } catch (e) {}
const v53 = new Uint32Array(v45);
function f54(a55, a56, a57, a58) {
    v53[1073741824] = v44;
    let v59;
    try { v59 = v45.map(a57, v2, a57); } catch (e) {}
    return v59;
}
f54.e = f54;
f54();
for (let v61 = 0; v61 < 10; v61++) {
}
let v62 = 0.28648900840377733;
const v63 = v62++;
let v64 = v63 << v63;
--v64;
gc();
