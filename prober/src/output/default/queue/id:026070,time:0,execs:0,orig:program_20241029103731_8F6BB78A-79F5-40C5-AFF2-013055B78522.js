function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const o6 = {
    "e": F0,
};
for (const v7 in o6) {
    class C8 {
        constructor(a10) {
            const v12 = `
                try { C8(); } catch (e) {}
            `;
            const v14 = v12.split(a10);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C8(v7);
}
gc();
