for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
class C10 {
}
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
const v21 = new C10();
function f22(a23, a24) {
    const o46 = {
        get f() {
            const v28 = `
                if (v28 == v21) {
                }
                /\u{12345}/myvis;
            `;
            const v31 = v28.split(8, 1.0);
            const v32 = [2.0,-4.0];
            function f33(a34, a35, a36) {
                return f22;
            }
            const v37 = f33();
            function F38(a40, a41, a42, a43) {
                if (!new.target) { throw 'must be called with new'; }
                try { a43.constructor(v31); } catch (e) {}
            }
            const v45 = new F38(v32, f33, v37, F38);
            return v45;
        },
    };
    return o46;
}
const v47 = f22();
v47.constructor.assign(f22, v47);
gc();
