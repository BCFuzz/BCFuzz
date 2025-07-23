for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f11() {
    const o18 = {
        ..."HU",
        toString(a14, a15) {
            (0n).__proto__.valueOf(a14);
            return 0n;
        },
    };
    return o18;
}
const v19 = f11();
class C20 extends f11 {
}
const t15 = C20.prototype.constructor;
const v23 = new t15();
const v24 = v23[1];
try { v24.substr(v19); } catch (e) {}
gc();
