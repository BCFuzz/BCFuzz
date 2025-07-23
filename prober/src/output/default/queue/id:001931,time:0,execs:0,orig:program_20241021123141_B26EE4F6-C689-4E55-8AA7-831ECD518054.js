function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
const v4 = v3.toLocaleString();
v4.toWellFormed(v2, v3, F0, v3);
const v6 = v4.small(v4);
const v7 = v6.startsWith(v2);
const v9 = Int16Array.length;
const v10 = v9 - v9;
let v11 = "number";
function f13(a14, a15, a16, a17) {
    const o41 = {
        toString(a19, a20) {
            const v21 = a20?.constructor;
            try { v21(a19, a19); } catch (e) {}
            const v24 = this.__proto__.toLocaleString();
            const v25 = v24.constructor;
            try { new v25(v10); } catch (e) {}
            v24.fontsize();
            const v28 = a20 || "8";
            v28 == v28;
            const v31 = -26944 >>> -26944;
            v31 === v31;
            Number.isNaN(v11--);
            const v36 = v11 ^ -26944;
            v36 + v36;
            const v38 = -26944 + v36;
            const v39 = v38 >>> v38;
            v39 !== v39;
        },
    };
    o41.toString();
    return o41;
}
let v43 = f13();
for (let i = 0; i < 5; i++) {
    const v44 = f13(v6, v7, "8", v4);
    -v44;
    v43 *= v44;
}
gc();
