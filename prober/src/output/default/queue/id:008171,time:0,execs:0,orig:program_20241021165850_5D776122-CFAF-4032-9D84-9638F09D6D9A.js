function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = ["-4294967297","-4294967297","-4294967297","-4294967297"];
    for (let v11 = 0; v11 < 50; v11++) {
        class C12 {
            constructor(a14, a15, a16) {
                try { v10.apply(this, v10); } catch (e) {}
            }
        }
        new C12(v10, v10, a7);
        new C12();
    }
}
new F3("__proto__", "__proto__", F3, BigInt64Array);
gc();
