/* @flow */

/**
 * Build a middleware
 */
export interface MiddlewareBuilderInterface
{
    build():Promise<Array<Function>>;
}

