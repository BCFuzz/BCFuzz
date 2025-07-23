for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 50; v13++) {
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i29, i30] = (() => {
                    function f19() {
                        return f19;
                    }
                    class C20 extends f19 {
                        constructor(a22) {
                            class C23 {
                            }
                            try { this.call(); } catch (e) {}
                            for (let v25 = 0; v25 < 5; v25++) {
                            }
                            super();
                        }
                    }
                    new C20();
                    return [0, 10];
                })();
                i29 < i30;
                i30--) {
            }
        }
        new F14();
    }
}
new F10();
gc();
