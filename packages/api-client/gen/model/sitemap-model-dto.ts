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


import { SitemapItemModelDto } from './sitemap-item-model-dto';
import { SitemapPageModelDto } from './sitemap-page-model-dto';

/**
 * 
 * @export
 * @interface SitemapModelDto
 */
export interface SitemapModelDto {
    /**
     * 
     * @type {Array<SitemapItemModelDto>}
     * @memberof SitemapModelDto
     */
    items?: Array<SitemapItemModelDto> | null;
    /**
     * 
     * @type {SitemapPageModelDto}
     * @memberof SitemapModelDto
     */
    page_model?: SitemapPageModelDto;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SitemapModelDto
     */
    custom_properties?: { [key: string]: any; } | null;
}

