for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = -2, i13 = 10; i12 != i13; i13--) {
}
for (let i22 = 0, i23 = 14; --i23, i22 < i23;) {
}
const o30 = {
};
const v32 = `
    const o39 = {
        toString(a34, a35) {
            /\u{12345}/myvis;
            return a34;
        },
        set b(a38) {
        },
    };
`;
const v40 = v32.replaceAll(8, o30);
for (let [i82, i83] = (() => {
        for (let [i63, i64] = (() => {
                for (let i43 = 0, i44 = 10;
                    i43 < i44;
                    (() => {
                        for (let i50 = 0, i51 = 10; i51--, i50 < i51;) {
                        }
                        i44--;
                    })()) {
                }
                return [-3, 10];
            })();
            (() => {
                for (let i67 = 0, i68 = 10; i67 < i68; i68--) {
                }
                return i63 < i64;
            })();
            i64--) {
        }
        return [0, 10];
    })();
    i83--, i82 < i83;
    ) {
}
const v90 = [2.0,-4.0];
function f91(a92, a93, a94) {
    return v90;
}
const v95 = f91(o30, v32, o30);
for (let i99 = 0, i100 = 10; i99 < i100; i100--) {
}
function F107(a109, a110, a111, a112) {
    if (!new.target) { throw 'must be called with new'; }
    try { a112.constructor(v40); } catch (e) {}
}
function f114() {
    return eval;
}
function f115(a116) {
    return a116;
}
Object.defineProperty(F107, "constructor", { enumerable: true, get: f114, set: f115 });
new F107(v90, f91, v95, F107);
gc();
