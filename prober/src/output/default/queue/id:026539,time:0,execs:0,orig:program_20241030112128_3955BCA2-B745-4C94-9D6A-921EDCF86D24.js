class C0 {
}
let v1 = new C0();
let v2 = undefined;
let v3 = Int8Array;
const v5 = new v3(255);
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            let v8 = this;
            const v11 = `
                ({"c":v2,"e":v3,"f":v1,...v8} = eval(v11));
            `;
            const v13 = v11.split(a9);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();
