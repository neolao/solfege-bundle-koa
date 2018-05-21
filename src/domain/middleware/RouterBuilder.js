/* @flow */
import KoaRouter from "koa-router"
import configYaml from "config-yaml"
import type {MiddlewareBuilderInterface} from "../model/MiddlewareBuilderInterface"
import type {ContainerInterface} from "solfegejs-dependency-injection/interface"

export default class RouterBuilder implements MiddlewareBuilderInterface
{
    container:ContainerInterface;
    filePath:string;

    constructor(container:ContainerInterface, filePath?:string)
    {
        this.container = container;
        if (filePath) {
            this.filePath = filePath;
        }
    }

    async populateRoutes(router:KoaRouter, config:any)
    {
        for (let routeId in config) {
            let route = config[routeId];

            if (!route.path) {
                throw new Error(`Path is required for the route "${routeId}"`);
            }
            if (!route.controller) {
                throw new Error(`Controller is required for the route "${routeId}"`);
            }

            let path = route.path;
            let controller = await this.container.get(route.controller.substring(1));
            let actionName = route.action;
            let action = controller[actionName];

            router.get(routeId, path, action);
        }
    }

    async build()
    {
        let router = new KoaRouter();

        if (this.filePath) {
            const config = configYaml(this.filePath);
            await this.populateRoutes(router, config);
        }

        return [
            router.routes(),
            router.allowedMethods()
        ]
    }
}

