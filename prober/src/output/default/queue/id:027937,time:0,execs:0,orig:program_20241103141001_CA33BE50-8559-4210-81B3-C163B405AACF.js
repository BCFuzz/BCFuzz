const v0 = /([\p{Script_Extensions=Mongolian}&&\p{Number}])/mdgsu;
for (let i3 = 10, i4 = 10; -3 < i3; i3--) {
}
function f11(a12, a13, a14) {
    for (let i17 = 0, i18 = 10;
        (() => {
            i18--;
            const v20 = i17 < i18;
            a13 += i18;
            return v20;
        })();
        ) {
    }
    return a13;
}
([-2086195288,772787169,0]).toLocaleString().replace(v0, f11);
gc();
