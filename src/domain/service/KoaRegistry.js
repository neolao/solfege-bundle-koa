/* @flow */

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
        this.instances.set(id, instance);
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
}
