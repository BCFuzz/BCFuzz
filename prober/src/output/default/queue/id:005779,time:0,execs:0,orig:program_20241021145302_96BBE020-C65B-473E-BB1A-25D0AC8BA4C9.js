const v1 = new Uint32Array();
function f2(a3) {
}
class C4 {
}
const v5 = new C4();
async function f6(a7, a8, a9) {
    const v11 = new Proxy(v5, v1);
    v11.then = f2;
    await v11;
}
f6(f2, f6, v1);
gc();
