import { diconstructor } from "./DiConstructor"
import { dicontainer } from "./dicontainer"
import { disetter } from "./DiSetter"
import { WithoutDi } from "./WithoutDi"

console.log('whitout Dependecy Injection Example')
WithoutDi()
console.log('Dependecy Injection with Constructor Example')
diconstructor();
console.log('Dependecy Injection with Setter Example')
disetter();
console.log('Dependecy Injection with Container Example');
dicontainer();