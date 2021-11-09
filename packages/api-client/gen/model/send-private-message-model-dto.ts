/* tslint:disable */
/* eslint-disable */
/**
 * nopCommerce Web API Frontend
 * Official nopCommerce Web API for public store
 *
 * The version of the OpenAPI document: v1.05
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SendPrivateMessageModelDto
 */
export interface SendPrivateMessageModelDto {
    /**
     * 
     * @type {number}
     * @memberof SendPrivateMessageModelDto
     */
    to_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof SendPrivateMessageModelDto
     */
    customer_to_name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SendPrivateMessageModelDto
     */
    allow_viewing_to_profile?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SendPrivateMessageModelDto
     */
    reply_to_message_id?: number;
    /**
     * 
     * @type {string}
     * @memberof SendPrivateMessageModelDto
     */
    subject?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SendPrivateMessageModelDto
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SendPrivateMessageModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SendPrivateMessageModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

