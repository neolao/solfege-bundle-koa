/* @flow */
import AbstractCommand from "solfegejs-cli/lib/Command/AbstractCommand"
import type KoaRegistry from "../../domain/service/KoaRegistry"

/**
 * List available instances
 */
export default class ListCommand extends AbstractCommand
{
    /**
     * Registry
     */
    registry:KoaRegistry;

    /**
     * Constructor
     *
     * @param   {KoaRegistry}   registry    Registry
     */
    constructor(registry:KoaRegistry)
    {
        super();

        this.registry = registry;
    }

    /**
     * Configure the command
     */
    async configure()
    {
        this.setName("koa:list");
        this.setDescription("List available Koa instances");
    }

    /**
     * Execute the command
     */
    async execute(parameters:Array<string>)
    {
        let instances = this.registry.getInstances();
        console.log(instances.keys());
    }
}

