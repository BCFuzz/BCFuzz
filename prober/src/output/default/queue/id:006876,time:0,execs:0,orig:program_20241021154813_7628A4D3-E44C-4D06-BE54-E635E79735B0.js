const v1 = new WeakMap();
function f2() {
    const v4 = ([-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677]).toLocaleString();
    return v4.small(f2, f2, v4);
}
const v7 = [[-2969,268435441,1585875460,-664797966,3,-10434,-1024,502918031,-13,-681670274],v1];
const o8 = {
    __proto__: v7,
};
o8[Symbol.toPrimitive] = f2;
o8.join(o8);
gc();
