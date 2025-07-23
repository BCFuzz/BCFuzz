const o0 = {
};
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
for (let v21 = 0; v21 < 50; v21++) {
    function F22() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v24 = new F22();
    class C25 {
    }
    const v26 = new C25();
    class C27 {
        constructor(a29, a30) {
            this.g = this;
            delete a30.g;
        }
    }
    const v32 = new C27(v24, o0);
    new C27(v26, v32);
}
gc();
