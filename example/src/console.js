import Application from "solfegejs-application"
import DIBundle from "solfegejs-dependency-injection"
import CliBundle from "solfegejs-cli"
import KoaBundle from "../../lib/Bundle";
import MyBundle from "./Bundle";

// Create application instance
let application = new Application;
application.addBundle(new DIBundle);
application.addBundle(new CliBundle);
application.addBundle(new KoaBundle);
application.addBundle(new MyBundle);

// Start the application
let parameters = process.argv.slice(2);
application.start(parameters);
