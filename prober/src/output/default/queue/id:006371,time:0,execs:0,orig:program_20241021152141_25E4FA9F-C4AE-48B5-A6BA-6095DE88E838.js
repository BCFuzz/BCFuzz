const v1 = new Float64Array(Float64Array, Float64Array);
const v2 = [-1.2758942158210395e+308,Infinity,1000.0,-1000000000000.0];
const o11 = {
    valueOf(a4) {
        function f5(a6, a7) {
            return a7;
        }
        a4[Symbol.hasInstance] = f5;
        v2[a4];
        return v2;
    },
};
function f12(a13, a14) {
    return v1;
}
o11.toString = f12;
try { o11.valueOf(o11); } catch (e) {}
gc();
