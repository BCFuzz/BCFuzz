for (let i2 = -21855, i3 = 10; i3--, i2 < i3;) {
}
const v11 = new Uint8ClampedArray();
const v13 = new Uint8ClampedArray(13);
let v14 = 12;
const v16 = ("number").constructor;
function f17(a18) {
    return v14--;
}
v16.valueOf = f17;
for (let i22 = 0, i23 = 127; i22 < i23; i23--) {
}
for (let v30 = 0; v30 < 5; v30++) {
    for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
        const v41 = [-2147483648,1073741825,4294967295,-1810460340];
        let v42 = 255;
        const v44 = ("dfYG").constructor;
        let v45 = v42 && v11;
        ({"buffer":v45,"byteLength":v30,"length":v42,} = v13);
        const v46 = v44.fromCharCode(v42, v44, v41);
        const o53 = {
            n(a48, a49, a50) {
                const v51 = this;
                try { v51.eval(v46); } catch (e) {}
                return v42;
            },
        };
        const t27 = o53.n;
        t27();
    }
}
gc();
