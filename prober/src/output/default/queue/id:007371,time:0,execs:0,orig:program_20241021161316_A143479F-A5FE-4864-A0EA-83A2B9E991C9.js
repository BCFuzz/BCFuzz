function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -13;
}
new F0();
new F0();
new F0();
const v6 = [];
async function f7(a8, a9, a10, a11) {
    try { a8.pop(); } catch (e) {}
    try { a10.map(a11); } catch (e) {}
    const v14 = await a10;
    try { v14.toString(); } catch (e) {}
    await v6[2147483647];
    for (let v18 = 0; v18 < 250; v18++) {
    }
    return v14;
}
class C19 extends F0 {
    static toString(a21, a22) {
        const o23 = {
        };
    }
}
const o26 = {
    valueOf(a25) {
    },
};
this[10] = 13;
const v30 = 64n << 64n;
v30 | v30;
function f33() {
}
const v35 = new Int16Array(3826);
const o36 = {
};
const v38 = new Proxy(v35, o36);
v38[10] = 3826;
gc();
