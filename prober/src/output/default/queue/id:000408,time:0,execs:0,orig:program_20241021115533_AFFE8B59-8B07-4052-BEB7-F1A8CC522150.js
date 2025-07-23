const v1 = new Set();
const v3 = v1.union(v1).entries();
class C4 {
    2359 = v3;
}
const v5 = new C4();
const v6 = new C4();
async function f7(a8, a9, a10) {
    const o11 = {
    };
    const v13 = new Proxy(v5, o11);
    await v13;
    return v6;
}
f7();
gc();
