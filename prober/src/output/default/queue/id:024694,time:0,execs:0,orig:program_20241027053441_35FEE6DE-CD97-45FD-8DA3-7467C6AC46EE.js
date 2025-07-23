let v0 = 8;
v0--;
const v2 = `
    class C3 {
        constructor(a5) {
            try {
                a5.#toString();
            } catch(e7) {
            }
        }
    }
`;
const v8 = v2.split(v0);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
}
const v14 = f10();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v8); } catch (e) {}
}
new F15(v9, f10, v14, F15);
gc();
