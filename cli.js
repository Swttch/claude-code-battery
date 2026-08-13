#!/usr/bin/env node
/**
 * `ccb` from the old package — hands straight over to the one in
 * @swttch/extend-kit.
 *
 * The command name is kept because people type it, and because the Swttch
 * backend exec's it by name to fill the usage panel; dropping it would make
 * an installed `ccb` vanish and the panel report ccb_missing.
 *
 * Imported rather than re-spawned so this stays a single process: argv,
 * stdout, the exit code and Ctrl-C all behave exactly as they did before,
 * with no wrapper in between to translate them.
 */

import '@swttch/extend-kit/cli';
