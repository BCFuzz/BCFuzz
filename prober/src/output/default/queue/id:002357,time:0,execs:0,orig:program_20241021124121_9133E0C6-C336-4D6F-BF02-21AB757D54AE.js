const v0 = [-4294967295,14,5,15,-2147483647,9];
const v1 = [-1024,-9007199254740992,-9007199254740992,1000];
const v2 = [127,-4096,-14574,12];
function f3() {
    return v1;
}
function f4(a5, a6) {
    const o12 = {
        "h": v1,
        set a(a8) {
            try { this.isView(a8, v0, a8, this, v1); } catch (e) {}
            const o10 = {
                "c": f3,
            };
            a5.__proto__ = v1;
            super.h;
        },
        "b": a5,
        __proto__: a5,
        2001: a6,
        [a5]: v0,
        5: a5,
    };
    return o12;
}
const v13 = f4(v2, v2);
f4(v0, v13);
const v15 = f4(v1, v13);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a22;
    this.a = v15;
}
for (let v25 = 0; v25 < 32; v25++) {
}
Object.defineProperty(v1, 10, { configurable: true, get: f3 });
gc();
