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


import { CheckoutCompletedModelDto } from './checkout-completed-model-dto';

/**
 * 
 * @export
 * @interface CompletedResponse
 */
export interface CompletedResponse {
    /**
     * 
     * @type {CheckoutCompletedModelDto}
     * @memberof CompletedResponse
     */
    model?: CheckoutCompletedModelDto;
    /**
     * 
     * @type {string}
     * @memberof CompletedResponse
     */
    redirect_to_method?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CompletedResponse
     */
    id?: number | null;
}

