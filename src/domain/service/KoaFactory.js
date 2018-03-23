/* @flow */
import Koa from "koa"

/**
 * Create KoaJS instance
 */
export default class KoaFactory
{
    /**
     * Create instance
     *
     * @return  {Koa}   Koa instance
     */
    create():Koa
    {
        const app = new Koa();

        return app;
    }
}
