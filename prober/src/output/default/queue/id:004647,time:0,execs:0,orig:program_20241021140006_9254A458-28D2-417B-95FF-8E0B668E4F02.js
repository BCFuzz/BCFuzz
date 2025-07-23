new WeakMap();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
Symbol.asyncIterator.description;
eval();
try { ("a").startsWith(); } catch (e) {}
function f12(a13) {
    const o17 = {
        __proto__: a13,
        [a13](a15, a16) {
            super.e = this;
        },
    };
}
try { f12(v4); } catch (e) {}
f12();
class C20 {
}
for (let v21 = 0; v21 < 250; v21++) {
    v21++;
    v21--;
}
gc();
