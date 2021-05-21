import Schema from './Schema';
import Reference from './Reference';
import Parameter from './Parameter';
import Example from './Example';
import RequestBody from './RequestBody';
import Header from './Header';
import SecurityScheme from './SecurityScheme';
import Link from './Link';
import Callback from './Callback';
import PathItem from './PathItem';

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object
 * will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 */
export default interface Components {
    /**
     * An object to hold reusable Schema Objects.
     */
    schemas?: { [name: string]: Schema };

    /**
     * An object to hold reusable Response Objects.
     */
    responses?: { [name: string]: Response | Reference };

    /**
     * An object to hold reusable Parameter Objects.
     */
    parameters?: { [name: string]: Parameter | Reference };

    /**
     * An object to hold reusable Example Objects.
     */
    examples?: { [name: string]: Example | Reference };

    /**
     * An object to hold reusable Request Body Objects.
     */
    requestBodies?: { [name: string]: RequestBody | Reference };

    /**
     * An object to hold reusable Header Objects.
     */
    headers?: { [name: string]: Header | Reference };

    /**
     * An object to hold reusable Security Scheme Objects.
     */
    securitySchemes?: { [name: string]: SecurityScheme | Reference };

    /**
     * An object to hold reusable Link Objects.
     */
    links?: { [name: string]: Link | Reference };

    /**
     * An object to hold reusable Callback Objects.
     */
    callbacks?: { [name: string]: Callback | Reference };

    /**
     * An object to hold reusable Path Item Object.
     */
    pathItems?: { [name: string]: PathItem | Reference };
}
