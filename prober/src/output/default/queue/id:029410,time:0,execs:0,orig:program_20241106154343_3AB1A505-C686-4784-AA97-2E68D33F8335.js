const v0 = [422.51693969201415,-2.7694576363274163e+307,-4.0,-1000000000.0,0.0,-544.4359186316308,-2.4709849732177293e+307];
function f1() {
    return v0;
}
for (let v2 = 0; v2 < 5; v2++) {
    for (let i5 = 0, i6 = 10;
        (() => {
            const v7 = i5 !== i6;
            const o8 = {
            };
            const o9 = {
                "getOwnPropertyDescriptor": f1,
            };
            const v11 = new Proxy(o8, o9);
            try { v11.hasOwnProperty(i5); } catch (e) {}
            return v7;
        })();
        i6--) {
    }
}
gc();
