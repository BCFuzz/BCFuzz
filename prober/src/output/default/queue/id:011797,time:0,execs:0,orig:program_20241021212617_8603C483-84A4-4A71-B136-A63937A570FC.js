function f2() {
}
Object.defineProperty(JSON, "toJSON", { enumerable: true, get: f2 });
JSON.stringify(JSON, 20704, 20704);
gc();
