function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
    this.c = 8;
}
new F0();
new F0();
new F0();
new BigInt64Array(4096);
new Float64Array(128);
new Uint8Array(20);
const v15 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f16(a17, a18) {
    typeof F0 === "symbol";
    return 20;
}
v15[Symbol.toPrimitive] = f16;
let v25 = 128;
const v26 = v25++;
const v27 = [];
Date.true = 1024;
const v29 = Date(v26);
const v30 = [1535927747,-3775,257,1,7];
const v34 = new BigUint64Array();
const v35 = v34.every(Date);
let v36 = v30.f;
const v37 = Date[v35];
const v38 = `
    Map.length = Map;
    const v40 = new Map();
    function f41() {
        v29[1024] = v15;
        return f16(Map, v40);
    }
    v40.valueOf = f41;
    let v43 = v40 | v15;
    v43++;
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    const v47 = new Float32Array(7);
    for (let v48 = 0; v48 < 5; v48++) {
        const v50 = "p" + v48;
        const v51 = v50?.codePointAt;
        try { v51(v47); } catch (e) {}
        v27[v50] = v48;
    }
    const v55 = new Float64Array(128);
    try { v55.findLast(1024); } catch (e) {}
    Uint8Array.prototype = Uint8Array;
    const v58 = new Uint8Array(2165);
    new Int16Array([]);
    Int8Array[2] = BigUint64Array;
    new Int8Array(Int8Array);
    for (let v64 = 0; v64 < 5; v64++) {
        v64[5];
    }
    const v67 = v58[842];
    v67 + v67;
    v27.__proto__ = v37;
    v29.g = Uint8Array;
    v36 = Uint32Array;
`;
eval(v38);
gc();
