/* @flow */
import type {BundleInterface} from "solfegejs-application/src/BundleInterface"
import RegisterCompilerPass from "./infrastructure/dependencyInjection/RegisterCompilerPass"
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
        container.addCompilerPass(new RegisterCompilerPass());
    }
}
