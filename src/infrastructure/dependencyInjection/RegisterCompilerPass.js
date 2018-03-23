/* @flow */

/**
 * Regsiter Koa instances
 */
export default class RegisterCompilerPass
{
    /**
     * Process the tags
     *
     * @param   {Container}     container   Service container
     */
    async process(container:any)
    {
        const registryDefinition = container.getDefinition("solfege_koa_registry");

        const serviceIds = container.findTaggedServiceIds("solfege.koa.instance");
        for (let serviceId of serviceIds) {
            const instanceReference = container.getReference(serviceId);
            const instanceDefinition = container.getDefinition(serviceId);
            const tags = instanceDefinition.getTags();

            for (let tag of tags) {
                if (tag.name !== "solfege.koa.instance") {
                    continue;
                }

                const instanceId = tag.id;
                registryDefinition.addMethodCall("addInstance", [
                    instanceId,
                    instanceReference
                ]);
            }
        }
    }
}
