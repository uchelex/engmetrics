const DECIMAL_BASE = 1000;
const BINARY_BASE = 1024;

const units = {
  bit: 1 / 8,
  B: 1,
  kB: DECIMAL_BASE,
  MB: DECIMAL_BASE ** 2,
  GB: DECIMAL_BASE ** 3,
  TB: DECIMAL_BASE ** 4,
  KiB: BINARY_BASE,
  MiB: BINARY_BASE ** 2,
  GiB: BINARY_BASE ** 3,
  TiB: BINARY_BASE ** 4
};

function convertDataStorage(value, fromUnit, system) {
  if (value <= 0) return null;

  const base = system === "binary" ? BINARY_BASE : DECIMAL_BASE;

  let bytes;
  if (system === "binary" && fromUnit.endsWith("iB")) {
    bytes = value * units[fromUnit];
  } else if (system === "decimal" && !fromUnit.endsWith("iB")) {
    bytes = value * units[fromUnit];
  } else {
    bytes = value * units[fromUnit];
  }

  return {
    bits: bytes * 8,
    B: bytes,
    kB: bytes / DECIMAL_BASE,
    MB: bytes / DECIMAL_BASE ** 2,
    GB: bytes / DECIMAL_BASE ** 3,
    TB: bytes / DECIMAL_BASE ** 4,
    KiB: bytes / BINARY_BASE,
    MiB: bytes / BINARY_BASE ** 2,
    GiB: bytes / BINARY_BASE ** 3,
    TiB: bytes / BINARY_BASE ** 4
  };
}

/* Example test */
console.log(
  convertDataStorage(500, "GB", "decimal")
);

