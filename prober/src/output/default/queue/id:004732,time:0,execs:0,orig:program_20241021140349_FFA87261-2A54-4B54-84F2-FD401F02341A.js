for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        return v0;
    }
    class C2 extends f1 {
    }
    const v3 = [];
    const o4 = {
        __proto__: v3,
    };
    o4.flatMap(C2);
}
gc();
