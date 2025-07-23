const v1 = new Int16Array();
function f2() {
    const v3 = new Int16Array();
    return v3;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
v1.slice();
gc();
