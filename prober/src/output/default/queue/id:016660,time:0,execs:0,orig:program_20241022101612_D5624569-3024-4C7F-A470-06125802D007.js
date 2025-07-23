function f0() {
    return f0;
}
const v1 = [f0];
const v2 = [f0];
[v1,v1,v1,v2,f0];
new Uint16Array(v2);
const v7 = new Float64Array(v1, Float64Array);
function f8(a9, a10, a11, a12) {
    return v7;
}
function f13(a14, a15) {
    return a15;
}
f8[Symbol.species] = f13;
for (let [i21, i22] = (() => {
        let v18 = 0;
        v18--;
        return [v18, 10];
    })();
    i21 < i22;
    i22--) {
    for (let v29 = 0; v29 < 25; v29++) {
    }
    const v30 = [-500523833,-9223372036854775807,-128];
    v30.constructor = f8;
    v30.splice(i21, i22);
}
gc();
