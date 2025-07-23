const v0 = [-256,-1,-65536,-11];
const v1 = [1073741823,4,0,-141567144,10,129,4294967297];
const v2 = [-701840552,2147483648,4,9223372036854775807,9007199254740992,9675,-65536,11];
function f3(a4) {
    const o5 = {
        ...a4,
        "c": v0,
    };
    const v6 = o5.shift;
    try { new v6(); } catch (e) {}
    return o5;
}
f3(v2);
f3(v1);
const v10 = f3(v2);
class C11 {
}
new C11(C11);
v10.length;
-1 - -1;
-2147483648 === -2147483648;
const v21 = new Uint8ClampedArray(1257);
v21[762] = v21;
-127;
new Float64Array(v21, Float64Array, v21);
new Float64Array(127);
0 % 0;
new Int32Array(0);
class C31 {
}
C31.e = C31;
const v32 = new C31();
const t32 = v32.constructor;
new t32();
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    const v39 = a37.__lookupGetter__;
    try { v39(Float64Array); } catch (e) {}
    let v41 = 200;
    const v42 = v41--;
    SharedArrayBuffer.prototype = SharedArrayBuffer;
    for (let [i47, i48] = (() => {
            let v45 = 10;
            v45++;
            return [0, v45];
        })();
        (() => {
            for (let i51 = 0, i52 = 10;
                (() => {
                    const v53 = i52--;
                    v53 >> v53;
                    const v55 = i51 < i52;
                    v55 || v55;
                    return v55;
                })();
                ) {
            }
            const v61 = i47 !== i48;
            !(v61 || v61);
            return v61;
        })();
        i48--) {
    }
    const o70 = {
        "maxByteLength": 3614,
    };
    o70.maxByteLength;
    const v73 = new SharedArrayBuffer(3614, o70);
    v73.byteLength = v73;
    const v75 = new Int32Array(v73);
    const v77 = createGlobalObject();
    const v78 = v77.Symbol;
    try { new v78(); } catch (e) {}
    const v80 = v77.Atomics;
    const v81 = v80.or;
    try { new v81(SharedArrayBuffer, -2147483648, Int32Array); } catch (e) {}
    const v84 = v80.waitAsync(v75, v41, v75, v42).__lookupSetter__;
    try { v84(v32); } catch (e) {}
    try { Uint8ClampedArray(); } catch (e) {}
    class C89 extends Uint8ClampedArray {
    }
    new C89(4294967296);
    for (let [i94, i95] = (() => {
            10 >>> 10;
            return [0, 10];
        })();
        (() => {
            const v96 = i94 / i94;
            v96 - v96;
            return i94 < i95;
        })();
        i95--) {
    }
}
const v104 = new F35(v32);
new F35(v104);
for (let [i109, i110] = (() => {
        0 / 0;
        return [0, 10];
    })();
    (() => {
        const v111 = i109 != i110;
        v111 || v111;
        return v111;
    })();
    i110--) {
}
gc();
