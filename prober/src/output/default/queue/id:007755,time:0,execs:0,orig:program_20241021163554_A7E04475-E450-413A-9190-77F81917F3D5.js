new Int8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
new F2();
const v5 = [];
new Map();
for (let v12 = 0; v12 < 5; v12++) {
    v5["p" + v12] = v12;
}
const v18 = new Map();
v18.values();
new Float32Array();
const v23 = new Uint8ClampedArray();
for (let v25 = 0; v25 < 5; v25++) {
    function F26() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F29(a31, a32) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v33 = new F29(F2, Uint8ClampedArray);
    const v34 = new F29();
    v33[true] = v34;
    for (let v35 = 0; v35 < 5; v35++) {
        class C38 {
        }
        const v39 = new C38();
        v39.constructor;
    }
    for (let v41 = 0; v41 < 5; v41++) {
    }
}
class C42 {
}
C42.constructor;
const v45 = delete v23[53343n];
v45 && v45;
new Int8Array();
function f48() {
}
for (let v49 = 0; v49 < 5; v49++) {
    try { Uint8Array.fromHex(); } catch (e) {}
}
gc();
