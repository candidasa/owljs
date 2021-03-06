/* Namespace: javautil
 *
 * handy functions for interacting with java
 *
 */

export('collectionToJsArray',
       'javaArrayToJsArray',
       'jsArrayToSet',
       'toJava');

/* Function: collectionToJsArray
 * Arguments:
 *  - col : a java Collection
 *
 * Returns:
 *  a javascript list
*/
function collectionToJsArray(col) {
    return javaArrayToJsArray(col.toArray());
}


/* Function: javaArrayToJsArray
 * Arguments:
 *  - a : a java Array
 *
 * Returns:
 *  a javascript list
*/
function javaArrayToJsArray(a) {
    var l = [];
    for (var k=0; k<a.length; k++) {
        l.push(a[k]);
    }
    return l;
}

/* Function: jsArrayToSet
   *
 * Arguments:
 *  - a : a javascript list (optional - if not specified, equivalent to [])
 *
 * Returns:
 *  a java HashSet
*/
function jsArrayToSet(l) {
    var hs = new java.util.HashSet();
    if (l != null) {
        for (var k in l) {
            // note: odd things happen with addAll(...)
            hs.add(l[k]);
        }
    }
    return hs;
}

function toJava(obj) {
    if (obj.push == null) {
        return obj;
    }
    else {
        return jsArrayToSet(obj);
    }
}
