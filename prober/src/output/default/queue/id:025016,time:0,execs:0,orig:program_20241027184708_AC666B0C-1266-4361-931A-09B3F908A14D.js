const v1 = new Int8Array();
function f2() {
    return f2;
}
f2[Symbol.species] = Int8Array;
v1.constructor = f2;
v1.slice();
gc();
