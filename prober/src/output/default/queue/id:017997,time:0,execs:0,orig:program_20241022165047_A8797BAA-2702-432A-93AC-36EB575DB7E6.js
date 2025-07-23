const v0 = [8,-4294967296];
function f1(a2) {
    return delete a2[a2];
}
v0.constructor = f1;
const t5 = v0.constructor;
const v6 = t5(v0).constructor;
const v9 = new Int32Array(3);
v9.sort(v6);
gc();
