/* @flow */
import KoaRouter from "koa-router"
import type {MiddlewareBuilderInterface} from "../model/MiddlewareBuilderInterface"

export default class RouterBuilder implements MiddlewareBuilderInterface
{
    koaRouter:any;

    constructor(filePath?:string)
    {
        this.koaRouter = new KoaRouter();
        this.koaRouter.get("root", "/", (ctx) => {
            ctx.body = "Hello World!";
        });
    }

    build()
    {
        return [
            this.koaRouter.routes(),
            this.koaRouter.allowedMethods()
        ]
    }
}

