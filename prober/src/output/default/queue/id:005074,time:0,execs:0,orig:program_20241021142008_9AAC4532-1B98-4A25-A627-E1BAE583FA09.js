function f0(a1) {
    gc();
    return f0;
}
class C4 {
}
const v5 = new C4();
async function f6(a7, a8, a9) {
    const o10 = {
    };
    const v12 = new Proxy(v5, o10);
    v12.then = f0;
    await v12;
    return a7;
}
f6(f0, v5, v5);
gc();
