/* @flow */
import type {BundleInterface} from "solfegejs-application/src/BundleInterface"
import RegisterInstance from "./infrastructure/dependencyInjection/compilerPass/RegisterInstance"
import UseMiddleware from "./infrastructure/dependencyInjection/compilerPass/UseMiddleware"
import type {ContainerConfiguratorBundleInterface, ContainerInterface} from "solfegejs-dependency-injection/interface"

/**
 * Koa bundle
 */
export default class Bundle implements BundleInterface, ContainerConfiguratorBundleInterface
{
    /**
     * Get bundle path
     *
     * @return  {String}        The bundle path
     */
    getPath():string
    {
        return __dirname;
    }

    /**
     * Configure service container
     *
     * @param   {ContainerInterface}    container       Service container
     */
    configureContainer(container:ContainerInterface):void | Promise<void>
    {
        container.addCompilerPass(new RegisterInstance());
        container.addCompilerPass(new UseMiddleware());
    }
}
