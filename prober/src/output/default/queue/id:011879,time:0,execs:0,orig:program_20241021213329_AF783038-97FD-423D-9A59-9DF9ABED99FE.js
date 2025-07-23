const v1 = new WeakMap();
function f2() {
    const v4 = ([-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677]).toLocaleString();
    const v5 = v4.small(f2, v4, v4);
    v5.trimRight(v1);
    return v5;
}
const v8 = [[-2969,268435441,1585875460,-664797966,3,-10434,-1024,502918031,-13,-681670274],v1];
const o9 = {
    __proto__: v8,
};
o9[Symbol.toPrimitive] = f2;
o9.join(o9).search();
gc();
