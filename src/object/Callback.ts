import PathItem from './PathItem';
import Reference from './Reference';

/**
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object
 * that describes a set of requests that may be initiated by the API provider and the expected responses. The key value
 * used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the
 * callback operation.
 *
 * To describe incoming requests from the API provider independent from another API call, use the webhooks field.
 *
 * @see https://spec.openapis.org/oas/v3.1.0#callback-object
 */
export default interface Callback {
    /**
     * A Path Item Object, or a reference to one, used to define a callback request and expected responses.
     * A complete example is available.
     */
    [name: string]: PathItem | Reference;
}
