const v0 = [12189,9007199254740992,-33534];
const o5 = {
    [true]: true,
    "g": null,
    "h": true,
    "b": true,
    "a": null,
    "e": true,
    get c() {
        return this;
    },
    [v0]() {
    },
};
for (let v6 = 0; v6 < 5; v6++) {
    for (const v7 in o5) {
        v7 in o5;
    }
}
gc();
