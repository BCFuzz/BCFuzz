const v0 = [-2.0,-3.0,-2.2250738585072014e-308,0.9285818043347193,-507370.16300152213,-151.13742975864625,-1.1008205736663194e+308,-3.0,7.110033855649605e+307];
function f1(a2, a3) {
    for (let v4 = 0; v4 < 25; v4++) {
        const o9 = {
            toString(a6, a7) {
                a6.toString(a2);
                return a2;
            },
        };
        o9.toString(o9);
    }
    return a2;
}
v0.toString = f1;
let [v12,,...v13] = "bigint";
v13[Symbol.toPrimitive] = f1;
try { v12.replace(v0); } catch (e) {}
v13.slice(v13, v13);
gc();
