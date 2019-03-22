/* global mocha */
import './test.spec.js'

mocha.checkLeaks()
mocha.run()
