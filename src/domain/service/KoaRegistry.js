/* @flow */
import type {MiddlewareBuilderInterface} from "../model/MiddlewareBuilderInterface"

/**
 * Register KoaJS instances
 */
export default class KoaRegistry
{
    /**
     * Instances
     */
    instances:Map<string, any>;

    /**
     * Constructor
     */
    constructor():void
    {
        this.instances = new Map();
    }

    /**
     * Add command
     *
     * @param   {string}    id          Instance identifier
     * @param   {Koa}       instance    Koa instance
     */
    addInstance(id:string, instance:any):void
    {
        if (!this.instances.has(id)) {
            this.instances.set(id, instance);
        }
    }

    /**
     * Get instances
     *
     * @return  {Map}                   Koa instances
     */
    getInstances():Map<string, any>
    {
        return this.instances;
    }

    /**
     * Get instance by its ID
     *
     * @param   {string}    id      Instance ID
     * @return  {any}               Instance
     */
    getInstanceById(id:string):any
    {
        if (this.instances.has(id)) {
            return this.instances.get(id);
        }

        return null;
    }

    addMiddleware(instanceId:string, middleware:any):void
    {
        const instance = this.getInstanceById(instanceId);

        instance.use(middleware);
    }

    addMiddlewareBuilder(instanceId:string, builder:MiddlewareBuilderInterface):void
    {
        const middlewares = builder.build();
        for (let middleware of middlewares) {
            this.addMiddleware(instanceId, middleware);
        }
    }
}
