const v0 = [-2.0,-3.0,-2.2250738585072014e-308,0.9285818043347193,-507370.16300152213,-151.13742975864625,-1.1008205736663194e+308,-3.0,7.110033855649605e+307];
function f1(a2, a3) {
    for (let v4 = 0; v4 < 25; v4++) {
        const o10 = {
            toString(a6, a7) {
                const v8 = a6.toString(a2);
                try { v8.trimRight(); } catch (e) {}
                return a7;
            },
        };
        o10.toString(o10);
    }
}
v0.toString = f1;
let [v13,,...v14] = "bigint";
v14[Symbol.toPrimitive] = f1;
try { v13.replace(v0); } catch (e) {}
v14.slice(v14, v14);
gc();
