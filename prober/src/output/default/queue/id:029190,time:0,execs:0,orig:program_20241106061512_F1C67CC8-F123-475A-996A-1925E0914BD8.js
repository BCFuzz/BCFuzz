let v0 = 12;
const v2 = ("number").constructor;
function f3(a4) {
    return v0--;
}
v2.valueOf = f3;
for (let i8 = 0, i9 = 127; i8 < i9; i9--) {
}
for (let i19 = 0, i20 = 10 + 10;
    i20--, i20;
    (() => {
        for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
            const v34 = [-2147483648,1073741825,4294967295,-1810460340];
            const v37 = ("-789426228").constructor;
            const v38 = v37.fromCharCode(255, v37, v34, "-789426228");
            const o45 = {
                n(a40, a41, a42) {
                    const v43 = this;
                    try { v43.eval(v38); } catch (e) {}
                    return 255;
                },
            };
            const v46 = o45.n;
            v46(v46, v38, v38);
        }
    })()) {
}
gc();
