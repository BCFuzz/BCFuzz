for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
}
const v21 = new BigUint64Array();
const v23 = new Int32Array();
function f24(a25) {
    const o33 = {
        toString(a28, a29) {
            return v21.toLocaleString(a28, this).constructor.fromCharCode("-13");
        },
    };
    const o34 = {
        "g": a25,
        [o33]: v23,
    };
    return o34;
}
JSON.parse(JSON.stringify([f24(f24()).g]));
gc();
