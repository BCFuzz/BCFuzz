const v0 = [0.8758053986184103,3.6334489287427374,0.41015735850419255,9.593714572265707,-9.868806213942043e+307,-173537.6416022951];
function f1(a2, a3, a4, a5) {
    a2.toSpliced(a4, a2);
    return arguments;
}
const o8 = {
    "has": f1,
    "set": f1,
};
const v10 = new Proxy(v0, o8);
v10.reverse(v10, v10, o8, f1);
gc();
