const v3 = [-37761,-33928,-9392,-6,-256,43517,58690,-9223372036854775807,-351915588,1];
const v4 = [602375111];
const v5 = [-268435456,61912,-1,-256,4,8];
function f6(a7, a8) {
    const o20 = {
        1024: v3,
        "e": a7,
        "h": 16,
        [v5]: 1000,
        valueOf(a10, a11) {
            function F12(a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = -3;
                this.g = a15;
            }
            F12(a11, v4, a10);
            new F12(a11, a8, v5);
            const v19 = new F12(-3, v3, a11);
            return v19;
        },
        "a": a8,
    };
}
const v21 = f6(1000, v5);
const v22 = f6(1000, v3);
function f23(a24, a25, a26, a27) {
    const o28 = {
        "h": v22,
        "e": v22,
        ...v3,
        "a": -3,
        "b": a24,
    };
    return o28;
}
const v29 = f23(-3, v22, v4, f6);
const v30 = f23();
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "h", { configurable: true, value: v21 });
    this.h = a35;
}
new F31(v21, v29, v5, v5);
new F31(v22, v22, v3, v5);
new F31(v30, v30, v4, v3);
class C40 {
    constructor(a42, a43, a44, a45) {
        for (let i = 0; i < 25; i++) {
            function f46() {
                function f47() {
                    return f47;
                }
                class C48 extends f47 {
                }
                C48[Symbol.iterator] = f46;
                C48[Symbol.iterator];
                f46 = a44;
            }
            f46(a45);
        }
    }
}
new C40();
gc();
