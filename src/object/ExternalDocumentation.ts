/**
 * Allows referencing an external resource for extended documentation.
 * @see https://spec.openapis.org/oas/v3.1.0#external-documentation-object
 */
export default interface ExternalDocumentation {
    /**
     * A description of the target documentation. CommonMark syntax MAY be used for rich text representation.
     */
    description?: string;

    /**
     * REQUIRED. The URL for the target documentation. This MUST be in the form of a URL.
     */
    url: string;
}
