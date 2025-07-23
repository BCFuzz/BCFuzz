class C1 {
}
const v2 = new C1();
function f3(a4, a5) {
    let v6 = [2.0];
    const o16 = {
        n(a8, a9, a10) {
            let v11 = this;
            const t8 = v11.Intl.NumberFormat;
            const v14 = t8();
            [v6,v11] = "-94190989";
            v14.format(v6);
            return a10;
        },
    };
    const v17 = o16.n;
    v17(C1, "-94190989", v17, v17);
    return v6;
}
v2.constructor = f3;
const v19 = v2.constructor;
v19(C1, v19, C1, "-94190989");
gc();
