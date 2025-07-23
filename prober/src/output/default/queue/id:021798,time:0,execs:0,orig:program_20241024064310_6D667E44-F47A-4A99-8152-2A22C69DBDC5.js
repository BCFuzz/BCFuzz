for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        function F9(a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = a12.name;
            class C15 {
                constructor(a17, a18) {
                    super.g = v7;
                    v14 in arguments;
                }
            }
            new C15();
        }
        new F9(196.25100004624983, F9);
    })()) {
}
gc();
