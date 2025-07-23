const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.isConcatSpreadable = v0;
}
new F1();
const v4 = new F1();
const t7 = v4.constructor;
const v6 = new t7();
v6.b = v6;
/wW(\2)(\1)*/mdgs;
/[a-b-c][^foo(?=bar)baz]/mgs;
try { new FinalizationRegistry(-4294967295n); } catch (e) {}
for (let i = 0; i < 5; i++) {
    async function f14(a15, a16, a17, a18) {
        try { a15.call(f14); } catch (e) {}
        const v20 = a17?.constructor;
        try { new v20(a15); } catch (e) {}
        const v22 = a16.length;
        a18.g = a18;
        (await FinalizationRegistry).length;
        return v22;
    }
    f14(FinalizationRegistry, f14, f14, f14);
}
gc();
