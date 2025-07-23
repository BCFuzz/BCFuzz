function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
    this.f = 9;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6() {
    return v3;
}
f6.length = f6;
0 - 0;
-1923362445 > -1923362445;
-268435456 >>> -268435456;
268435440 >> 268435440;
[v3,v3,-536870912,[F0,5,v4,-268435456,268435440]];
[5,5,F0];
const v20 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
let v22 = 128;
v22--;
const v24 = v22++;
const v25 = [];
Date.length = Date;
const v27 = Date(v24);
const v28 = [1535927747,-3775,257,1,7];
try { Uint8Array.fromBase64(v24); } catch (e) {}
const v33 = new BigUint64Array();
const v34 = v33.every(Date);
let v35 = v28.f;
const v36 = Date[v34];
const v37 = `
    Map.length = Map;
    const v39 = new Map();
    let v40 = v39 | v20;
    v40++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v44 = new Float32Array(7);
    for (let v45 = 0; v45 < 5; v45++) {
        v45 <= v45;
        const v48 = "p" + v45;
        const v49 = v48?.codePointAt;
        v49.d = v49;
        try { v49(v44); } catch (e) {}
        v25[v48] = v45;
    }
    const v53 = new Float64Array(128);
    v53.length = v53;
    try { v53.findLast(1024); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v56 = new Uint8Array(2165);
    v56[2006];
    const v58 = v56[842];
    v58 + v58;
    v25.__proto__ = v36;
    v27.g = Uint8Array;
    v35 = Uint32Array;
`;
eval(v37);
gc();
