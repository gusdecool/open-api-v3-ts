/**
 * License information for the exposed API.
 * @see https://spec.openapis.org/oas/v3.1.0#license-object
 */
export default interface License {
    /**
     * REQUIRED. The license name used for the API.
     */
    name: string;

    /**
     * An SPDX license expression for the API. The identifier field is mutually exclusive of the url field.
     */
    identifier?: string;

    /**
     * A URL to the license used for the API. This MUST be in the form of a URL. The url field is mutually exclusive
     * of the identifier field.
     */
    url?: string;
}
