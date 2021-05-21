import Reference from './Reference';
import Header from './Header';
import MediaType from './MediaType';
import Link from './Link';

/**
 * Describes a single response from an API Operation, including design-time, static links to operations based on the
 * response.
 * @see https://spec.openapis.org/oas/v3.1.0#response-object
 */
export default interface Response {
    /**
     * REQUIRED. A description of the response. CommonMark syntax MAY be used for rich text representation.
     */
    description: string;

    /**
     * Maps a header name to its definition. [RFC7230] states header names are case insensitive. If a response header
     * is defined with the name "Content-Type", it SHALL be ignored.
     */
    headers?: { [name: string]: Header | Reference };

    /**
     * A map containing descriptions of potential response payloads. The key is a media type or
     * [media type range]appendix-D) and the value describes it. For responses that match multiple keys, only the most
     * specific key is applicable. e.g. text/plain overrides text/*
     */
    content?: { [name: string]: MediaType | Reference };

    /**
     * A map of operations links that can be followed from the response. The key of the map is a short name for the
     * link, following the naming constraints of the names for Component Objects.
     */
    links?: { [name: string]: Link | Reference };
}
