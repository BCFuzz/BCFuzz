Object.defineProperty(([Date]).__proto__, Symbol.toPrimitive, { value: Date });
gc();
