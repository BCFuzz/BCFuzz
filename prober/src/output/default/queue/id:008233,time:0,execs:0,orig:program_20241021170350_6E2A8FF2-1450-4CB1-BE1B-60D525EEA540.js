function f0() {
    return f0;
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F1;
    class C7 {
    }
    const v8 = new C7();
    new Float32Array(4, v8);
    function f11() {
        const o13 = {
            ["536870888"]: "536870888",
        };
        return o13;
    }
    const v14 = f11();
    function f15(a16) {
        const o17 = {
            ...v14,
        };
        return o17;
    }
    const v18 = f15();
    v18[536870888];
    function F20(a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        const t27 = this.constructor;
        t27(v18);
    }
    function F27(a29, a30, a31, a32) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v33 = new F27(-1.3604407964463793e+308, 4, -5.440974883188636, -21.61360290274979);
    function F34() {
        if (!new.target) { throw 'must be called with new'; }
        this[6] = v33;
    }
    const v36 = new F34();
    const v37 = new F34();
    for (const v38 in v36) {
        v36[6] = v37;
    }
    new F27(-21.61360290274979, 4);
    new F27(-1.3604407964463793e+308, 4, -5.440974883188636, -5.440974883188636);
    const v43 = new Float64Array(1483);
    for (const v44 of v43) {
    }
    this.b = f0;
}
new F1();
new F1();
gc();
