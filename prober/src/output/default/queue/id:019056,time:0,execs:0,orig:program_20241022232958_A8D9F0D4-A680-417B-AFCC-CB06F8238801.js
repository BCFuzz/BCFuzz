class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 50; v2++) {
    function f3() {
        return v2;
    }
    const o8 = {
        toString(a5, a6) {
            let v7;
            try { v7 = a5.toString(v1, a6); } catch (e) {}
            a6.arguments = f3;
            return v7;
        },
    };
    o8.toString(o8, f3);
    o8.toString(o8, o8);
}
gc();
