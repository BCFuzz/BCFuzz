const o1 = {
    "h": "fS",
};
let v2 = 255;
for (const v3 in o1) {
    class C4 {
        constructor(a6) {
            let v5 = this;
            const v8 = `
                try { v5.o(v2, v3, v8, v8, C4); } catch (e) {}
                ({"f":a6,"length":v2,...v5} = "function");
            `;
            const v11 = v8.split(a6);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
