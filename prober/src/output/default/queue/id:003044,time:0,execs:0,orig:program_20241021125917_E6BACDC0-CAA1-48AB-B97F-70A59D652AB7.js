class C1 {
}
const v2 = new C1();
const v3 = ["number","number","number"];
const v6 = new Int32Array(681);
try { Float32Array("number", v3, v2); } catch (e) {}
function f9(a10, a11, a12, a13) {
    arguments[0];
    return arguments;
}
f9(v6);
v6.map(f9);
gc();
