function f1(a2) {
    const o7 = {
        toString(a4) {
            const v5 = /7\xed\xa0\x80/vs;
            const v6 = v5.test(v5);
            super[this] = a2;
            return v6;
        },
    };
    return o7;
}
const v8 = f1();
const v10 = [["number","number","number","number"],f1,v8];
try { ("number").endsWith(v10); } catch (e) {}
gc();
