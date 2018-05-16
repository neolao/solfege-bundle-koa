/* @flow */
import bodyparser from "koa-bodyparser"

/**
 * Build middleware
 */
export default class MiddlewareBuilder
{
    buildBodyParser()
    {
        return bodyparser();
    }
}
