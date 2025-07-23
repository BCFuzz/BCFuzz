const v2 = new Int16Array(3);
const v4 = new Int16Array(12);
function f5() {
    const v6 = v2.byteLength;
    v4[v6] |= 3;
    for (let v7 = 0; v7 < 5; v7++) {
        f5();
    }
    return v6;
}
function f9(a10, a11) {
    return a11;
}
const v13 = ([1000,861464607,1073741824,14,28302,129,64736]).filter(f9);
v13[Symbol.toPrimitive] = f5;
try { JSON.parse(v13); } catch (e) {}
gc();
