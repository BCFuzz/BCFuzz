const o8 = {
    toString(a2) {
        const v3 = [-9223372036854775807];
        const v5 = ["p","p"];
        Reflect.apply(v3.push, "p", v5);
        return "p";
    },
};
try { o8.toString("p", "p"); } catch (e) {}
gc();
