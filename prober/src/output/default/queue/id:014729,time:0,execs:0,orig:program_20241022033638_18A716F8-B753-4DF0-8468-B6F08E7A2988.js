const o0 = {
};
function f1(a2, a3, a4) {
    const o5 = {
        ...o0,
    };
}
for (let v7 = 0; v7 < 25; v7++) {
    o0["p" + v7] = v7;
}
Uint8ClampedArray.toString = f1;
Uint8ClampedArray[2] = Uint8ClampedArray;
Int32Array.from(Uint8ClampedArray);
gc();
