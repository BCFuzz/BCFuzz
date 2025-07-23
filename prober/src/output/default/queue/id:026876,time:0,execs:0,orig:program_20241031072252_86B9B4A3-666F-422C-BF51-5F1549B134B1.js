function f0(a1) {
    const v2 = `
        /\ud808\udf45*xyz??foo(?=bar)baz/mdvis;
    `;
    eval(v2);
    return f0;
}
class C6 {
}
const v7 = new C6();
async function f8(a9, a10, a11) {
    const o12 = {
    };
    const v14 = new Proxy(v7, o12);
    v14.then = f0;
    await v14;
    return v14;
}
f8();
gc();
