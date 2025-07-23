const v0 = /[x\dz]abc|def(?:a{5,1000000}){3,1000000}a$/vs;
const v1 = /n(a)\1/mdyvgis;
function f2() {
    const o9 = {
        set b(a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                ("p" + v5).replace("p", v0);
            }
        },
    };
    o9.b = o9;
    return o9;
}
v1.toString = f2;
v1.toString(v1, v1);
gc();
