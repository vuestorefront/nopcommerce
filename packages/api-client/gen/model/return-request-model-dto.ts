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
 * @interface ReturnRequestModelDto
 */
export interface ReturnRequestModelDto {
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    custom_number?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    return_request_status?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnRequestModelDto
     */
    product_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    product_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    product_se_name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReturnRequestModelDto
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    return_reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    return_action?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    comments?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    uploaded_file_guid?: string;
    /**
     * 
     * @type {string}
     * @memberof ReturnRequestModelDto
     */
    created_on?: string;
    /**
     * 
     * @type {number}
     * @memberof ReturnRequestModelDto
     */
    id?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ReturnRequestModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

