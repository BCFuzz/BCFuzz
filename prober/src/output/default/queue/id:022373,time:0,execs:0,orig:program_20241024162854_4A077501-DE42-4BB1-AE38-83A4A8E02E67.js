const v1 = new Float64Array();
function f2() {
    return Float64Array;
}
f2[Symbol.species] = Float64Array;
v1.constructor = f2;
v1.slice(v1, f2);
gc();
