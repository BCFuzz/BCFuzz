function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    ("POSITIVE_INFINITY").concat();
    class C22 {
    }
    let v23 = new C22();
    class C24 extends C22 {
        [a15] = "split";
    }
    const v25 = new C24();
    for (let v26 = 0; v26 < 100; v26++) {
        try { v26(); } catch (e) {}
        v23 = v25;
        v26++;
        v26--;
    }
}
new F13();
new F13();
new F13();
const v35 = Array();
v35[1858] = F13;
v35["toReversed"]();
gc();
