// @see https://spec.openapis.org/oas/v3.1.0#data-types

enum DataType {
    int = 'int',
    num = 'number',
    str = 'string',
}

enum DataFormat {
    /** signed 32 bits */
    int32 = 'int32',

    /** signed 64 bits (a.k.a long) */
    int64 = 'int64',

    float = 'float',
    double = 'double',

    /** A hint to UIs to obscure input. */
    password = 'password',
}
