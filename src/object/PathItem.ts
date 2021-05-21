import Operation from './Operation';
import Server from './Server';
import Parameter from './Parameter';
import Reference from './Reference';

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path
 * itself is still exposed to the documentation viewer but they will not know which operations and parameters are
 * available.
 * @see https://spec.openapis.org/oas/v3.1.0#path-item-object
 */
export default interface PathItem {
    /**
     * Allows for a referenced definition of this path item. The referenced structure MUST be in the form of a Path
     * Item Object. In case a Path Item Object field appears both in the defined object and the referenced object,
     * the behavior is undefined. See the rules for resolving Relative References.
     */
    $ref?: string;

    /**
     * An optional, string summary, intended to apply to all operations in this path.
     */
    summary?: string;

    /**
     * An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be
     * used for rich text representation.
     */
    description?: string;

    /**
     * A definition of a GET operation on this path.
     */
    get?: Operation;

    /**
     * A definition of a PUT operation on this path.
     */
    put?: Operation;

    /**
     * A definition of a POST operation on this path.
     */
    post?: Operation;

    /**
     * A definition of a DELETE operation on this path.
     */
    delete?: Operation;

    /**
     * A definition of a OPTIONS operation on this path.
     */
    options?: Operation;

    /**
     * A definition of a HEAD operation on this path.
     */
    head?: Operation;

    /**
     * A definition of a PATCH operation on this path.
     */
    patch?: Operation;

    /**
     * A definition of a TRACE operation on this path.
     */
    trace?: Operation;

    /**
     * An alternative server array to service all operations in this path.
     */
    servers?: Server[];

    /**
     * A list of parameters that are applicable for all the operations described under this path. These parameters can
     * be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated
     * parameters. A unique parameter is defined by a combination of a name and location. The list can use the
     * Reference Object to link to parameters that are defined at the OpenAPI Object’s components/parameters.
     */
    parameters?: Parameter | Reference;
}
