const v0 = [1000000000000.0];
const v1 = [];
function f2(a3, a4) {
    return v0;
}
const v6 = Symbol.species;
f2[v6] = f2;
v1.constructor = f2;
v1.concat(v1, v0, v6, f2, v0);
gc();
