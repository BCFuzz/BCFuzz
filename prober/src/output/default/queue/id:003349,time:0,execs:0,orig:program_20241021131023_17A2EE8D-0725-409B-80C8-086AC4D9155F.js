function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
    this.c = 8;
}
new F0();
new F0();
new F0();
new BigInt64Array(4096);
const v10 = [-9007199254740991,-1992258515,1073741823];
const v12 = v10["valueOf"];
try { v12(v10, v12, v10, v12, v12); } catch (e) {}
function f14() {
    const o16 = {
        get h() {
            return f14;
        },
    };
    return o16;
}
const v17 = f14();
for (let v18 = 0; v18 < 25; v18++) {
    v17["p" + v18] = v18;
}
new Float64Array(128);
new Uint8Array(20);
const v26 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f27(a28, a29) {
    typeof F0 === "symbol";
    return 20;
}
new BigUint64Array();
const v37 = new Uint16Array(199, 199, 199);
class C38 {
}
const v39 = new C38();
v39[Symbol.toStringTag] = v37;
v26[Symbol.toPrimitive] = f27;
let v45 = 128;
const v46 = v45++;
const v47 = [];
Date.true = 1024;
const v49 = Date(v46);
const v50 = [1535927747,-3775,257,1,7];
const v54 = new BigUint64Array();
const v55 = v54.every(Date);
let v56 = v50.f;
const v57 = Date[v55];
const v58 = `
    Map.length = Map;
    const v60 = new Map();
    function f61() {
        v49[1024] = v26;
        return f27(Map, v60);
    }
    v60.valueOf = f61;
    for (let v65 = 0; v65 < 5; v65++) {
        ("p" + v65)?.codePointAt;
    }
    for (let v74 = 0; v74 < 5; v74++) {
    }
    class C77 {
    }
    const o82 = {
        [199]: -537,
        n(a81) {
        },
    };
    v47.__proto__ = v57;
    v56 = Uint32Array;
`;
eval(v58);
gc();
