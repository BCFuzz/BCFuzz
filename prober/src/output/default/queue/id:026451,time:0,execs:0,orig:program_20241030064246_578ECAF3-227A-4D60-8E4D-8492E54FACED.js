let v0 = Uint8ClampedArray;
class C1 {
}
const v2 = new C1();
for (let i5 = 0, i6 = 10;
    (() => {
        const v7 = i5 !== i6;
        for (let i10 = 0, i11 = 10;
            (() => {
                for (let i14 = -3, i15 = 10; i14 < i15; i15--) {
                }
                return i10 <= i11;
            })();
            i11--) {
        }
        return v7;
    })();
    i6--) {
}
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
}
const v44 = new v0(255);
for (const v45 in v44) {
    const o54 = {
        toString(a47, a48) {
            const v51 = v2.toLocaleString(v45, C1, a47).constructor.fromCharCode(v45);
            const v52 = v51.padEnd(255, v51, v51, v45);
            v52.replace(v52, v52);
            return v45;
        },
    };
    function f55(a56) {
        "p" + a56;
        return a56;
    }
    new v0(o54);
    v0 = f55;
}
for (let i62 = 0, i63 = 10; i62 < i63; i63--) {
}
gc();
