function f0(a1, a2) {
    return a2;
}
class C3 extends f0 {
}
for (let v4 = 0; v4 < 250; v4++) {
    function f5(a6) {
        const o7 = {
        };
        return o7;
    }
    class C10 extends f5().constructor {
    }
    C10.keys(f5);
    v4++;
    v4--;
}
gc();
