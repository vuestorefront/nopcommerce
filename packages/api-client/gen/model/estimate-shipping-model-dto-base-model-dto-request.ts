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


import { EstimateShippingModelDto } from './estimate-shipping-model-dto';

/**
 * 
 * @export
 * @interface EstimateShippingModelDtoBaseModelDtoRequest
 */
export interface EstimateShippingModelDtoBaseModelDtoRequest {
    /**
     * 
     * @type {EstimateShippingModelDto}
     * @memberof EstimateShippingModelDtoBaseModelDtoRequest
     */
    model?: EstimateShippingModelDto;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EstimateShippingModelDtoBaseModelDtoRequest
     */
    form?: { [key: string]: string; } | null;
}

