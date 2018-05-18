/* @flow */

/**
 * Build a middleware
 */
export interface MiddlewareBuilderInterface
{
    build():Array<Function>;
}

