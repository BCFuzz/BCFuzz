let v0 = -128;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1();
for (let v5 = 0; v5 < 100; v5++) {
    const v7 = new Map();
    const v8 = v7.values();
    class C9 {
    }
    class C10 extends C9 {
    }
    for (let v11 = 0; v11 < 25; v11++) {
        let v12 = v0++;
        v8.f = delete v4[v12--];
    }
}
gc();
