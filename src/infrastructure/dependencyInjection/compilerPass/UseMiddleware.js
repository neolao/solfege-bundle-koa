/* @flow */

/**
 * Use middleware for Koa instances
 */
export default class UseMiddleware
{
    /**
     * Process the tags
     *
     * @param   {Container}     container   Service container
     */
    async process(container:any)
    {
        const registryDefinition = container.getDefinition("solfege_koa_registry");

        // Regular middleware
        let serviceIds = container.findTaggedServiceIds("solfege.koa.middleware");
        for (let serviceId of serviceIds) {
            const middlewareReference = container.getReference(serviceId);
            const middlewareDefinition = container.getDefinition(serviceId);
            const tags = middlewareDefinition.getTags();

            for (let tag of tags) {
                if (tag.name !== "solfege.koa.middleware") {
                    continue;
                }

                const instanceId = tag.target;
                registryDefinition.addMethodCall("addMiddleware", [
                    instanceId,
                    middlewareReference
                ]);
            }
        }

        // Middleware builder
        serviceIds = container.findTaggedServiceIds("solfege.koa.middleware_builder");
        for (let serviceId of serviceIds) {
            const middlewareReference = container.getReference(serviceId);
            const middlewareDefinition = container.getDefinition(serviceId);
            const tags = middlewareDefinition.getTags();

            for (let tag of tags) {
                if (tag.name !== "solfege.koa.middleware_builder") {
                    continue;
                }

                const instanceId = tag.target;
                registryDefinition.addMethodCall("addMiddlewareBuilder", [
                    instanceId,
                    middlewareReference
                ]);
            }
        }
    }
}
