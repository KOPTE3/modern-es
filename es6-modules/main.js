import {admin, hello} from './lib.js';

hello(admin);	// Hello, Jhon Snow

// ИЛИ ТАК:
import * as lib from './lib.js';

lib.hello(lib.admin);	// Hello, Jhon Snow


// ИЛИ ТАК:
import {admin as me, hello as hi} from `lib.js`;

hi(me);		// Hello, Jhon Snow
