/**
 * claude-code-battery — now a thin forwarder to @swttch/extend-kit.
 *
 * This package was folded into @swttch/extend-kit, which also carries the
 * other tools Swttch cannot bundle into the plugin. Nothing here is
 * maintained separately any more.
 *
 * It is deliberately NOT removed: this package has thousands of installs a
 * month, and some of them import it directly. Re-exporting keeps that code
 * compiling untouched. Anything the new package exports, this one exports
 * too — so do not curate this list down to "what we use", or you break
 * somebody else's build.
 *
 * New code should import '@swttch/extend-kit' instead.
 */

export * from '@swttch/extend-kit';
