const v1 = new Uint16Array();
const v2 = [1000000.0,NaN,936.7023307211578,1.1644217958678942e+308,0.6573331210623583,-2.0,-1.1829604499687676];
const v3 = /1/v;
function f4(a5, a6, a7, a8) {
    const o9 = {
        __proto__: a7,
    };
    const v10 = o9.constructor;
    v3.__proto__ = v1;
    v10(a7);
    return a6;
}
f4(f4, v2, v3);
gc();
