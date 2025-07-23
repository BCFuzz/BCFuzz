function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const o10 = {
        toString(a6, a7) {
            class C8 {
            }
            class C9 extends C8 {
            }
            Object.defineProperty(C8, 6, { configurable: true, value: 3.566232640442948 });
            return 3.566232640442948;
        },
    };
    o10.toString();
}
new F1();
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = `
    `;
}
const v17 = `
    \`match${F13}getUint32\`;
`;
const v19 = v17.split();
try { v19.flatMap(eval); } catch (e) {}
gc();
